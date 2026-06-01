import type { WorkItem } from "@/lib/site";
import { ListItem } from "@/components/ListItem";
import { SectionHead } from "@/components/SectionHead";

type SelectedWorkListProps = {
  items: WorkItem[];
  label?: string;
  meta?: string;
};

function sortByYearDesc(items: WorkItem[]) {
  return [...items].sort((a, b) => {
    const ya = parseInt(a.year, 10) || 0;
    const yb = parseInt(b.year, 10) || 0;
    return yb - ya || a.title.localeCompare(b.title);
  });
}

export function SelectedWorkList({
  items,
  label = "Selected work",
  meta,
}: SelectedWorkListProps) {
  const sorted = sortByYearDesc(items);

  return (
    <section className="mt-16 mb-16">
      <SectionHead label={label} meta={meta} />

      <div className="divide-y divide-border">
        {sorted.map((item, idx) => {
          const prev = sorted[idx - 1];
          const showYear = !prev || prev.year !== item.year;

          return (
            <a
              key={item.title}
              href={item.href}
              className="group block py-4 transition-colors hover:bg-surface-2/70 sm:py-5"
            >
              <div className="flex gap-3 sm:grid sm:grid-cols-[3.25rem_1fr_minmax(0,1fr)] sm:items-center sm:gap-x-6 sm:px-1">
                {/* Year column — desktop */}
                <span className="hidden text-right text-[13px] tabular-nums text-text-dim sm:block">
                  {showYear ? item.year : "\u00a0"}
                </span>

                {/* Icon + title — mobile shows year inline */}
                <div className="flex min-w-0 flex-1 items-start gap-3">
                  {showYear ? (
                    <span className="w-11 shrink-0 pt-0.5 text-right text-[13px] tabular-nums text-text-dim sm:hidden">
                      {item.year}
                    </span>
                  ) : (
                    <span className="w-11 shrink-0 sm:hidden" aria-hidden />
                  )}

                  <ListItem seed={idx} />

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                      <span className="text-[15px] font-semibold tracking-tight underline-offset-4 group-hover:underline text-text">
                        {item.title}
                      </span>
                      {item.wip ? (
                        <span className="font-mono text-[10px] uppercase tracking-widest text-text-dim">
                          WIP
                        </span>
                      ) : null}
                    </div>

                    {/* Description — mobile only */}
                    <p className="mt-2 text-[14px] leading-snug text-text-muted sm:hidden">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Description — desktop only */}
                <p className="hidden text-[14px] leading-snug text-text-muted sm:block sm:text-right">
                  {item.description}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
