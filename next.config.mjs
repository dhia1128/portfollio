import mdx from "@next/mdx";
import fs from "node:fs";

const exampleEnv = fs.readFileSync(".env.example", "utf8");
const dataReportUrl = exampleEnv
  .split(/\r?\n/)
  .find((line) => line.startsWith("datareportanalyserproject="))
  ?.slice("datareportanalyserproject=".length)
  .trim()
  .replace(/^(["'])(.*)\1$/, "$2");

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],
  env: {
    datareportanalyserproject: dataReportUrl ?? "",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.google.com",
        pathname: "**",
      },
    ],
  },
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
};

export default withMDX(nextConfig);
