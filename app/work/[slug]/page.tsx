import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllWork, getWorkBySlug } from "@/lib/work";
import { BackLink } from "@/components/BackLink";
import { HeroImage } from "@/components/HeroImage";
import { ArrowUpRightIcon } from "@/components/icons/ArrowUpRightIcon";

export function generateStaticParams() {
  return getAllWork().map((item) => ({ slug: item.slug }));
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;

  try {
    const post = getWorkBySlug(slug);
    return {
      title: `${post.meta.title} | Paul Larkin`,
      description: post.meta.summary,
    };
  } catch {
    return {};
  }
}

function MetaField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-sm text-text-muted mb-1">{label}</p>
      <p className="text-sm text-text">{value}</p>
    </div>
  );
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { slug } = await params;

  let post;
  try {
    post = getWorkBySlug(slug);
  } catch {
    notFound();
  }

  const { meta } = post;
  const { default: Content } = await import(`@/content/projects/${slug}.mdx`);

  const year = meta.date
    ? new Date(meta.date as string).getFullYear().toString()
    : undefined;

  const metaFields = [
    { label: "Year", value: year },
    { label: "Status", value: meta.status },
    { label: "Role", value: meta.role },
    { label: "Tools", value: meta.tools },
  ].filter((f) => typeof f.value === "string") as {
    label: string;
    value: string;
  }[];

  const links = Array.isArray(meta.links)
    ? (meta.links as { label: string; url: string }[])
    : [];

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-background font-sans">
      <article className="flex flex-1 w-full max-w-3xl flex-col px-8 sm:px-16 py-32">
        <BackLink />

        <div className="mb-10">
          <HeroImage src={meta.heroImage} alt={meta.title} />
        </div>

        <h1 className="text-2xl font-bold text-text">{meta.title}</h1>

        {typeof meta.summary === "string" && (
          <p className="text-base text-text-muted leading-relaxed mt-2">
            {meta.summary}
          </p>
        )}

        {(metaFields.length > 0 || links.length > 0) && (
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-x-8 gap-y-4 border-t border-border pt-4 mt-4">
            {metaFields.map((f) => (
              <MetaField key={f.label} label={f.label} value={f.value} />
            ))}
            {links.length > 0 && (
              <div>
                <p className="text-sm text-text-muted mb-1">Links</p>
                <div className="flex flex-col gap-1">
                  {links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-text underline underline-offset-4 decoration-(--color-border) hover:decoration-text transition-colors"
                    >
                      {link.label}
                      <ArrowUpRightIcon className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {post.content.trim() && (
          <div className="prose dark:prose-invert max-w-none text-text border-t border-border pt-10 mt-10">
            <Content />
          </div>
        )}
      </article>
    </div>
  );
}
