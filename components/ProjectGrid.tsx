import type { LabItem } from "@/lib/site";
import { LabCard } from "@/components/LabCard";
import { SectionHead } from "@/components/SectionHead";

type ProjectGridProps = {
  items: LabItem[];
  label?: string;
  meta?: string;
};

export function ProjectGrid({
  items,
  label = "Side projects",
  meta,
}: ProjectGridProps) {
  return (
    <section className="mb-24 w-full">
      <SectionHead label={label} meta={meta} />

      <div className="pt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <LabCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}
