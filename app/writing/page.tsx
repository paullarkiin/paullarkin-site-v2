import { WritingList } from "@/components/WritingList";
import { notes } from "@/lib/site";

export default function Writing() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-background font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col px-16 pt-24 sm:items-start">
        <WritingList notes={notes} />
      </main>
    </div>
  );
}
