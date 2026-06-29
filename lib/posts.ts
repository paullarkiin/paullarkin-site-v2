import { getAllContent, getContentBySlug } from "./content";
import type { ContentMeta } from "./content";

const WRITING_DIR = "content/writing";

export type PostMeta = ContentMeta;

export function getAllPosts(): PostMeta[] {
  return getAllContent(WRITING_DIR);
}

export function getPostBySlug(slug: string) {
  return getContentBySlug(WRITING_DIR, slug);
}
