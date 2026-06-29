import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface ContentMeta {
  slug: string;
  title: string;
  date: string;
  summary?: string;
  readingTime?: string;
  [key: string]: unknown;
}

function resolveDir(dir: string) {
  return path.join(process.cwd(), dir);
}

export function getAllContent(dir: string): ContentMeta[] {
  const fullPath = resolveDir(dir);
  const files = fs.readdirSync(fullPath);

  return files
    .filter((file) => /\.(md|mdx)$/.test(file))
    .map((file) => {
      const slug = file.replace(/\.(md|mdx)$/, "");
      const raw = fs.readFileSync(path.join(fullPath, file), "utf-8");
      const { data } = matter(raw);

      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? "",
        summary: data.summary,
        readingTime: data.readingTime,
        ...data,
      };
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getContentBySlug(dir: string, slug: string) {
  const fullPath = resolveDir(dir);
  const mdxPath = path.join(fullPath, `${slug}.mdx`);
  const mdPath = path.join(fullPath, `${slug}.md`);
  const filePath = fs.existsSync(mdxPath) ? mdxPath : mdPath;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    meta: {
      slug,
      title: data.title ?? slug,
      date: data.date ?? "",
      summary: data.summary,
      readingTime: data.readingTime,
      ...data,
    } as ContentMeta,
    content,
  };
}
