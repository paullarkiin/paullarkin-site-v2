import { WritingList } from "@/components/WritingList";
import { getAllPosts } from "@/lib/posts";
import { BackLink } from "@/components/BackLink";
import { notFound } from "next/navigation";

export default function Writing() {
  notFound();
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-background font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col px-16 pt-24 sm:items-start">
        <BackLink />
        <WritingList notes={getAllPosts()} />
      </main>
    </div>
  );
}
