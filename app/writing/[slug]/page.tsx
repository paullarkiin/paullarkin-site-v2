import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { formatDate } from "@/lib/format";
import { BackLink } from "@/components/BackLink";
import { PageShell } from "@/components/PageShell";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;

  try {
    const post = getPostBySlug(slug);
    return {
      title: `${post.meta.title} | Paul Larkin`,
      description: post.meta.summary,
    };
  } catch {
    return {};
  }
}

export default async function WritingPost({ params }: { params: Params }) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  // Drafts are previewable in dev but 404 in production.
  if (process.env.NODE_ENV === "production" && post.meta.draft === true) {
    notFound();
  }

  const { default: Content } = await import(`@/content/writing/${slug}.mdx`);

  return (
    <PageShell as="article" className="pt-32">
      <BackLink href="/writing" />
      <header className="mb-8">
        <h1 className="text-2xl font-bold">{post.meta.title}</h1>
        {post.meta.date && (
          <p className="text-sm text-text-muted mt-2">
            {formatDate(post.meta.date, "full")}
          </p>
        )}
      </header>

      <div className="prose dark:prose-invert max-w-none text-text mb-32">
        <Content />
      </div>
    </PageShell>
  );
}
