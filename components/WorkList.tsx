import type { WorkItem } from "@/lib/site";
import { ListItem } from "@/components/ListItem";

type WorkListProps = {
  items: WorkItem[];
  label?: string;
};

export function WorkList({ items, label = "Side Projects" }: WorkListProps) {
  return (
    <section className="mb-24 w-full">
      <h5 className="mb-4 text-[14px] font-medium text-text">{label}</h5>

      <div className="flex flex-col">
        {items.map((item, idx) => (
          <a
            key={item.title}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block py-4 transition-colors hover:bg-surface-2/70 sm:py-5"
          >
            <div className="flex items-center gap-3 sm:gap-x-6 sm:px-1">
              <ListItem seed={idx} />

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-base font-medium text-text">
                    {item.title}
                  </p>
                  {item.wip ? (
                    <div className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-emerald-700">
                      NEW
                    </div>
                  ) : null}
                </div>
                <p className="text-[14px] text-text-muted">
                  {item.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
