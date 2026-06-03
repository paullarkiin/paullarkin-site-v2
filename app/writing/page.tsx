import { Header } from "@/components/Header";
import { WritingList } from "@/components/WritingList";
import { getAllPosts } from "@/lib/posts";

export default function Writing() {
  const posts = getAllPosts();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-background font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col px-16 pt-24 sm:items-start">
        <WritingList notes={posts} label="All Writing" showSummary />
      </main>
    </div>
  );
}
