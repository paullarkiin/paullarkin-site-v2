import type { LabItem } from "@/lib/site";
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

export function LabGrid({ items, label = "Lab", meta }: LabGridProps) {
  return (
    <section className="mb-24">
      <SectionHead label={label} meta={meta} />

      <div className="-mx-2 overflow-x-auto overflow-y-visible py-3 pb-6 sm:mx-0 sm:overflow-visible sm:py-4">
        <div className="flex min-w-min flex-row items-stretch justify-start gap-0 pl-1 pr-6 sm:justify-center sm:px-0">
          {items.map(({ item, tag, date }, i) => (
            <a
              key={item.title}
              href={item.href}
              className={[
                "group relative flex w-[min(248px,78vw)] shrink-0 flex-col rounded-lg border border-border-strong bg-surface-2 p-4 shadow-none transition-[transform,box-shadow] duration-200",
                "hover:z-50 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)]",
                "focus-visible:z-50 focus-visible:outline-2 focus-visible:outline-offset-2",
                ROTATIONS[i % ROTATIONS.length],
                `z-${30 - i * 10}`,
                i < items.length - 1 ? "-mr-11 sm:-mr-14" : "",
              ].join(" ")}
            >
              <div className="flex items-baseline justify-between gap-3 font-mono text-[10px] uppercase tracking-widest text-text-dim">
                <span className="truncate">{tag}</span>
                <span className="shrink-0 tabular-nums">{date}</span>
              </div>

              <div className="my-3 h-px w-full bg-border" aria-hidden />

              <p className="text-base font-medium leading-snug tracking-tight text-text">
                {item.title}
              </p>
              <p className="mt-2 text-[14px] leading-normal text-text-muted">
                {item.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
