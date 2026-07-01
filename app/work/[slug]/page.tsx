import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import { getAllContent, getContentBySlug } from "@/lib/content";

import { BackLink } from "@/components/BackLink";

const PROJECTS_DIR = "content/projects";

export function generateStaticParams() {
  return getAllContent(PROJECTS_DIR).map((item) => ({ slug: item.slug }));
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;

  try {
    const post = getContentBySlug(PROJECTS_DIR, slug);
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
    post = getContentBySlug(PROJECTS_DIR, slug);
  } catch {
    notFound();
  }

  const { meta } = post;

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-background font-sans">
      <article className="flex flex-1 w-full max-w-3xl flex-col px-16 pt-24">
        <BackLink />

        {typeof meta.heroImage === "string" && (
          <div className="mb-10">
            <Image
              src={meta.heroImage as string}
              alt={meta.title}
              width={768}
              height={480}
              className="w-full h-auto rounded-lg"
              priority
            />
          </div>
        )}

        <h1 className="text-2xl font-bold text-text mb-10">
          {meta.title}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-x-10 gap-y-8 mb-12">
          {typeof meta.about === "string" && (
            <div>
              <h2 className="text-sm font-medium text-text-muted mb-2">About</h2>
              <p className="text-sm text-text leading-relaxed">
                {meta.about}
              </p>
            </div>
          )}

          <div className="flex flex-col gap-6">
            {typeof meta.role === "string" && (
              <div>
                <h2 className="text-sm font-medium text-text-muted mb-1">Role</h2>
                <p className="text-sm text-text">{meta.role}</p>
              </div>
            )}
            {typeof meta.tools === "string" && (
              <div>
                <h2 className="text-sm font-medium text-text-muted mb-1">Tools</h2>
                <p className="text-sm text-text">{meta.tools}</p>
              </div>
            )}
            {typeof meta.timeline === "string" && (
              <div>
                <h2 className="text-sm font-medium text-text-muted mb-1">Timeline</h2>
                <p className="text-sm text-text">{meta.timeline}</p>
              </div>
            )}
          </div>
        </div>

        {post.content.trim() && (
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
        )}
      </article>
    </div>
  );
}
