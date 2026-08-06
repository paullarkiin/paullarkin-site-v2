import type { ProjectItem } from "@/lib/projects";
import { SectionHead } from "@/components/SectionHead";
import { ProjectCard } from "@/components/ProjectCard";

type ProjectGridProps = {
  items: ProjectItem[];
  label?: string;
  meta?: string;
};

const CARD_STYLES = [
  "sm:-rotate-[1.1deg] z-30",
  "sm:rotate-[0.85deg] z-20",
  "sm:-rotate-[1.85deg] z-10",
] as const;

export function ProjectGrid({
  items,
  label = "Side Projects",
  meta,
}: ProjectGridProps) {
  return (
    <section className="mb-24">
      <SectionHead label={label} meta={meta} />
      <div className="-mx-2 overflow-x-auto overflow-y-visible py-3 pb-6 sm:mx-0 sm:overflow-visible sm:py-4">
        <div className="flex min-w-min flex-row items-stretch justify-start gap-3 pl-1 pr-6 sm:justify-center sm:gap-0 sm:px-0">
          {items.map((item, i) => (
            <ProjectCard
              key={item.title}
              item={item}
              className={CARD_STYLES[i % CARD_STYLES.length]}
              isLast={i === items.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
