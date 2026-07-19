import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { getAllPosts } from "@/lib/posts";
import { getAllWork } from "@/lib/work";

export default function sitemap(): MetadataRoute.Sitemap {
  const writingEntries: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${siteConfig.url}/writing/${post.slug}`,
    lastModified: post.date,
  }));

  const projectEntries: MetadataRoute.Sitemap = getAllWork().map((project) => ({
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
