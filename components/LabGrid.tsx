import type { LabItem } from "@/lib/site";
import { iconMap } from "@/lib/icons";
import { SectionHead } from "@/components/SectionHead";

export type LabGridItem = {
  item: LabItem;
  tag: string;
  date: string;
};

type LabGridProps = {
  items: LabGridItem[];
  label?: string;
  meta?: string;
};

const ROTATIONS = ["-rotate-[1.1deg]", "rotate-[0.85deg]", "-rotate-[0.55deg]"];

export function LabGrid({
  items,
  label = "Side Projects",
  meta,
}: LabGridProps) {
  return (
    <section className="mb-24">
      <SectionHead label={label} meta={meta} />

      <div className="-mx-2 overflow-x-auto overflow-y-visible py-3 pb-6 sm:mx-0 sm:overflow-visible sm:py-4">
        <div className="flex min-w-min flex-row items-stretch justify-start gap-0 pl-1 pr-6 sm:justify-center sm:px-0">
          {items.map(({ item, tag, date }, i) => {
            const Icon = iconMap[item.icon];
            return (
              <a
                key={item.title}
                href={item.href}
                className={[
                  "group relative flex h-60 w-[min(248px,78vw)] shrink-0 flex-col overflow-hidden rounded-2xl outline-1 outline-black/5 bg-surface shadow-sm transition-[transform,box-shadow] duration-200 dark:outline-white/10",
                  "hover:z-50 hover:scale-[1.02] hover:shadow-md",
                  "focus-visible:z-50 focus-visible:outline-2 focus-visible:outline-offset-2",
                  ROTATIONS[i % ROTATIONS.length],
                  `z-${30 - i * 10}`,
                  i < items.length - 1 ? "-mr-11 sm:-mr-14" : "",
                ].join(" ")}
              >
                <div className="p-4 pb-0">
                  <div className="aspect-16/10 flex items-center justify-center rounded-md border border-border-strong bg-surface-higher/50">
                    <Icon
                      className="h-6 w-6 text-text"
                      label={item.iconLabel}
                    />
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-1 p-4 pt-3">
                  <div className="flex items-baseline justify-between gap-3 font-sans text-[10px] uppercase tracking-widest text-text-muted">
                    <span className="truncate">{tag}</span>
                    <span className="shrink-0 tabular-nums">{date}</span>
                  </div>

                  <p className="text-[14px] font-medium leading-snug tracking-tight text-text">
                    {item.title}
                  </p>
                  <p className="text-[12px] leading-normal text-text-muted">
                    {item.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
