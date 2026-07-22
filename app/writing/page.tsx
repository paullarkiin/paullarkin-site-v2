import { getAllPosts } from "@/lib/posts";
import { WritingArchive } from "@/components/WritingArchive";

export default function Writing() {
  const posts = getAllPosts();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-background font-sans">
      <main className="flex w-full max-w-3xl flex-1 flex-col px-8 p-32 sm:px-16 sm:items-start">
        <header className="mb-14 max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <p className="text-sm text-text-muted">Writing</p>
            <span className="h-px w-8 bg-border" aria-hidden />
            <p className="text-sm tabular-nums text-text-muted">
              {posts.length} {posts.length === 1 ? "article" : "articles"}
            </p>
          </div>
          <p className="text-base leading-relaxed text-text">
            A collection of thoughts on design engineering, security, and the
            things I&apos;ve learnt and built along the way.
          </p>
        </header>

        <WritingArchive posts={posts} />
      </main>
    </div>
  );
}
