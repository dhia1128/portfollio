import { getPosts } from "@/utils/utils";
import { Column } from "@once-ui-system/core";
import { ProjectCard } from "@/components";

interface ProjectsProps {
  range?: [number, number?];
  exclude?: string[];
  hideImages?: boolean;
  hideImagesFor?: string[];
}

export function Projects({ range, exclude, hideImages, hideImagesFor }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  // Exclude by slug (exact match)
  if (exclude && exclude.length > 0) {
    allProjects = allProjects.filter((post) => !exclude.includes(post.slug));
  }

  const sortedProjects = allProjects.sort((a, b) => {
    const dateA = a.metadata.publishedAt ? new Date(a.metadata.publishedAt).getTime() : 0;
    const dateB = b.metadata.publishedAt ? new Date(b.metadata.publishedAt).getTime() : 0;

    return dateB - dateA || a.metadata.title.localeCompare(b.metadata.title);
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {displayedProjects.map((post, index) => (
        <ProjectCard
          priority={index < 2}
          key={post.slug}
          href={`/work/${post.slug}`}
          images={
            hideImages ||
            hideImagesFor?.includes(post.slug) ||
            post.metadata.showImagesInList === false
              ? []
              : post.metadata.images
          }
          title={post.metadata.title}
          description={post.metadata.summary}
          technologies={post.metadata.technologies || []}
          content={post.content}
          avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
          link={post.metadata.link || ""}
          githubLink={post.metadata.githubLink || ""}
        />
      ))}
    </Column>
  );
}
