import type { MetadataRoute } from "next";
import { siteConfig, notes } from "@/lib/site";
import { getAllContent } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getAllContent("content/projects");

  const writingEntries: MetadataRoute.Sitemap = notes.map((post) => ({
    url: `${siteConfig.url}/writing/${post.slug}`,
    lastModified: post.date,
  }));

  const projectEntries: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteConfig.url}/work/${project.slug}`,
    lastModified: project.date,
  }));

  return [
    { url: siteConfig.url, lastModified: new Date() },
    { url: `${siteConfig.url}/about`, lastModified: new Date() },
    ...writingEntries,
    ...projectEntries,
  ];
}
