import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/writing");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  summary: string;
}

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(postsDirectory);

  const posts = files
    .filter((file) => /\.(md|mdx)$/.test(file))
    .map((file) => {
      const slug = file.replace(/\.(md|mdx)$/, "");
      const raw = fs.readFileSync(path.join(postsDirectory, file), "utf-8");
      const { data } = matter(raw);

      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? "",
        summary: data.summary ?? "",
      };
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  return posts;
}

export function getPostBySlug(slug: string) {
  const mdxPath = path.join(postsDirectory, `${slug}.mdx`);
  const mdPath = path.join(postsDirectory, `${slug}.md`);
  const filePath = fs.existsSync(mdxPath) ? mdxPath : mdPath;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    meta: {
      slug,
      title: data.title ?? slug,
      date: data.date ?? "",
      summary: data.summary ?? "",
    },
    content,
  };
}
