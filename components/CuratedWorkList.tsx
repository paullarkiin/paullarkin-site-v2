import Link from "next/link";
import { IconBadge } from "@/components/IconBadge";
import { SectionHead } from "@/components/SectionHead";
import type { CuratedWorkListItem } from "@/lib/curatedWorkList";

type CuratedWorkListProps = {
  items: CuratedWorkListItem[];
  label?: string;
  meta?: string;
};

export function CuratedWorkList({
  items,
  label = "Work",
  meta,
}: CuratedWorkListProps) {
  return (
    <section className="mb-16 w-full">
      <SectionHead label={label} meta={meta} />

      <div className="group/list">
        {items.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="group block rounded-xl px-0 py-4 transition-all duration-200 opacity-100 group-hover/list:opacity-40 hover:opacity-100! hover:bg-surface-higher/70 sm:-mx-3 sm:px-3 sm:py-5"
          >
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] sm:gap-x-6">
              <div className="flex w-full items-start gap-4 sm:items-center">
                <IconBadge icon={item.icon} />

                <span className="text-text text-base font-medium ">
                  {item.title}
                </span>

                <p className="mt-1 text-sm text-text-muted sm:hidden">
                  {item.description}
                </p>
              </div>

              <p className="hidden text-sm text-text-muted leading-tight sm:block sm:text-right">
                {item.description}
              </p>

              {item.date ? (
                <span className="text-sm leading-tight text-text-muted">
                  {item.date}
                </span>
              ) : null}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
