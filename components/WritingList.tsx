import Link from "next/link";
import type { PostMeta } from "@/lib/posts";
import { formatDate } from "@/lib/format";
import { IconBadge } from "@/components/IconBadge";
import { SectionHead } from "@/components/SectionHead";

type WritingListProps = {
  notes: PostMeta[];
  label?: string;
  meta?: string;
  showSummary?: boolean;
};

export function WritingList({
  notes,
  label = "Latest Writing",
  meta,
}: WritingListProps) {
  return (
    <section className="mb-16 w-full">
      <SectionHead label={label} meta={meta} />

      <div className="group/list flex flex-col w-full">
        {notes.map((note) => (
          <Link
            href={`/writing/${note.slug}`}
            key={note.slug}
            className="group rounded-xl px-0 py-4 transition-all duration-200 opacity-100 group-hover/list:opacity-40 hover:opacity-100! hover:bg-surface-higher/70 sm:-mx-3 sm:px-3"
          >
            <div className="flex w-full flex-nowrap items-center justify-between gap-3">
              <div className="flex min-w-0 items-center gap-3">
                <IconBadge icon="lines" />

                <p className="truncate text-base font-medium">{note.title}</p>
              </div>

              <p className="shrink-0 whitespace-nowrap text-sm text-text-muted">
                {formatDate(note.date)}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
