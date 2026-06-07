import Link from "next/link";
import type { PostMeta } from "@/lib/posts";
import { formatNoteDate } from "@/lib/format";
import { ListItem } from "@/components/ListItem";
import { SectionHead } from "@/components/SectionHead";

type WritingListProps = {
  notes: PostMeta[];
  label?: string;
  meta?: string;
  showSummary?: boolean;
};

export function WritingList({
  notes,
  label = "Writing",
  meta,
  showSummary = false,
}: WritingListProps) {
  return (
    <section className="mb-24 w-full">
      <SectionHead label={label} meta={meta} />

      <div className="group/list flex flex-col">
        {notes.map((note, idx) => (
          <Link
            key={note.slug}
            href={`/writing/${note.slug}`}
            className="group flex items-start gap-3 rounded-xl px-3 py-3 transition-all duration-200 opacity-100 group-hover/list:opacity-40 hover:opacity-100! hover:bg-surface-2/70 sm:-mx-3"
          >
            <ListItem seed={idx} variant="lines" />

            <div className="min-w-0 flex-1">
              <p className="text-base font-medium text-text">{note.title}</p>

              {showSummary && note.summary ? (
                <p className="text-[14px] text-text-muted leading-normal mt-1 max-w-140">
                  {note.summary}
                </p>
              ) : null}

              <p className="text-[14px] text-text-dim font-sans mt-1">
                {formatNoteDate(note.date)}
                {note.readingTime ? ` · ${note.readingTime}` : null}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
