import { getAllContent, getContentBySlug } from "./content";
import type { ContentMeta } from "./content";
import type { IconName } from "./icons";

const PROJECTS_DIR = "content/projects";

export interface WorkMeta extends ContentMeta {
  description: string;
  icon: IconName;
  year: string;
  href: string;
}

export function getAllWork(): WorkMeta[] {
  return getAllContent(PROJECTS_DIR)
    .map((item) => ({
      ...(item as WorkMeta),
      year: item.date ? new Date(item.date).getFullYear().toString() : "",
      href: `/work/${item.slug}`,
    }))
    .sort((a, b) => {
      const ya = parseInt(a.year, 10) || 0;
      const yb = parseInt(b.year, 10) || 0;
      return yb - ya || a.title.localeCompare(b.title);
    });
}

export function getWorkBySlug(slug: string) {
  return getContentBySlug(PROJECTS_DIR, slug);
}
