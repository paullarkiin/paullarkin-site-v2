import Link from "next/link";
import type { WorkMeta } from "@/lib/work";
import { IconBadge } from "@/components/IconBadge";
import { SectionHead } from "@/components/SectionHead";

type SelectedWorkListProps = {
  items: WorkMeta[];
  label?: string;
  meta?: string;
};

export function SelectedWorkList({
  items,
  label = "Featured work",
  meta,
}: SelectedWorkListProps) {
  return (
    <section className="mb-24 w-full">
      <SectionHead label={label} meta={meta} />

      <div className="group/list">
        {items.map((item, idx) => {
          const prev = items[idx - 1];
          const showYear = !prev || prev.year !== item.year;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="group block rounded-xl px-0 py-4 transition-all duration-200 opacity-100 group-hover/list:opacity-40 hover:opacity-100! hover:bg-surface-higher/70 sm:-mx-3 sm:px-3 sm:py-5"
            >
              <div className="flex gap-3 sm:grid sm:grid-cols-[3.25rem_1fr_minmax(0,1fr)] sm:items-center sm:gap-x-6">
                {/* Year column — desktop only */}
                <span className="hidden text-[14px] tabular-nums text-text-muted sm:block">
                  {showYear ? item.year : "\u00a0"}
                </span>

                <div className="flex min-w-0 flex-1 items-start gap-3 sm:items-center">
                  <IconBadge icon={item.icon} />

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      <span className="text-base font-medium text-text">
                        {item.title}
                      </span>
                    </div>

                    {/* Description — mobile only */}
                    <p className="mt-1 text-[14px] leading-snug text-text-muted sm:hidden">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Description — desktop only */}
                <p className="hidden text-[14px] leading-snug text-text-muted sm:block sm:text-right">
                  {item.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
