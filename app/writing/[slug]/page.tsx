import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { formatNoteDate } from "@/lib/format";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

type Params = Promise<{ slug: string }>;

export default async function WritingPost({ params }: { params: Params }) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-background font-sans">
      <article className="flex flex-1 w-full max-w-3xl flex-col px-16 pt-24">
        <header className="mb-8">
          <h1 className="text-2xl font-bold text-text">{post.meta.title}</h1>
          {post.meta.date && (
            <p className="text-sm text-text-dim mt-2">
              {formatNoteDate(post.meta.date)}
            </p>
          )}
        </header>

        <div className="prose prose-invert max-w-none">
          <MDXRemote
            source={post.content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm, remarkFrontmatter],
              },
            }}
          />
        </div>
      </article>
    </div>
  );
}
