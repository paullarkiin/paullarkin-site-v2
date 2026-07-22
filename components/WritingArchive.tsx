import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

function formatPublicationDate(iso: string): string {
  const date = new Date(iso);

  if (Number.isNaN(date.getTime())) return iso;

  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export function WritingArchive({ posts }: { posts: PostMeta[] }) {
  return (
    <section aria-label="All writing" className="w-full">
      <div className="group/list flex flex-col gap-1">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/writing/${post.slug}`}
            className="group rounded-xl py-5 transition-all duration-200 group-hover/list:opacity-40 hover:bg-surface-higher/60 hover:opacity-100! sm:-mx-4 sm:px-4"
          >
            <div className="flex items-baseline justify-between gap-6">
              <h2 className="text-base font-semibold leading-snug text-text">
                {post.title}
              </h2>
              <p className="hidden shrink-0 text-xs text-text-muted sm:block">
                <time dateTime={post.date}>
                  {formatPublicationDate(post.date)}
                </time>
                {post.readingTime ? ` · ${post.readingTime}` : null}
              </p>
            </div>
            {post.summary ? (
              <p className="mt-1.5 max-w-2xl text-base leading-relaxed text-text-muted">
                {post.summary}
              </p>
            ) : null}
            <p className="mt-2 text-xs text-text-muted sm:hidden">
              <time dateTime={post.date}>{formatPublicationDate(post.date)}</time>
              {post.readingTime ? ` · ${post.readingTime}` : null}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
