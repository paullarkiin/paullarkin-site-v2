import { getAllPosts } from "@/lib/posts";
import { WritingArchive } from "@/components/WritingArchive";
import { PageShell } from "@/components/PageShell";
import { Header } from "@/components/Header";

export default function Writing() {
  const posts = getAllPosts();

  return (
    <PageShell className="py-32 sm:items-start">
      <Header
        title="Writing"
        subtitle={`${posts.length} ${posts.length === 1 ? "article" : "articles"}`}
      >
        <p className="mt-4 max-w-2xl text-base leading-relaxed">
          A collection of thoughts on design engineering, security, and the
          things I&apos;ve learnt and built along the way.
        </p>
      </Header>
      <WritingArchive posts={posts} />
    </PageShell>
  );
}
