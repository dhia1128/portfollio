import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { Readable } from "node:stream";
import { join } from "node:path";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const filePath = join(process.cwd(), "assets", "source-media", "localdemo.mp4");
  const { size } = await stat(filePath);
  const headers = new Headers({
    "Accept-Ranges": "bytes",
    "Content-Type": "video/mp4",
    "Cache-Control": "public, max-age=3600",
    "X-Content-Type-Options": "nosniff",
  });
  const rangeHeader = request.headers.get("range");

  if (!rangeHeader) {
    headers.set("Content-Length", String(size));
    return new Response(Readable.toWeb(createReadStream(filePath)) as ReadableStream, { headers });
  }

  const range = /^bytes=(\d*)-(\d*)$/.exec(rangeHeader);
  if (!range || (!range[1] && !range[2])) {
    headers.set("Content-Range", `bytes */${size}`);
    return new Response(null, { status: 416, headers });
  }

  const suffixLength = range[2] && !range[1] ? Number(range[2]) : undefined;
  const start = suffixLength === undefined ? Number(range[1]) : Math.max(size - suffixLength, 0);
  const end = suffixLength === undefined
    ? range[2] ? Math.min(Number(range[2]), size - 1) : size - 1
    : size - 1;

  if (!Number.isSafeInteger(start) || !Number.isSafeInteger(end) || start >= size || start > end) {
    headers.set("Content-Range", `bytes */${size}`);
    return new Response(null, { status: 416, headers });
  }

  headers.set("Content-Range", `bytes ${start}-${end}/${size}`);
  headers.set("Content-Length", String(end - start + 1));
  return new Response(
    Readable.toWeb(createReadStream(filePath, { start, end })) as ReadableStream,
    { status: 206, headers },
  );
}