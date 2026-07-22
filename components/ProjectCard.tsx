import type { ProjectItem } from "@/lib/projects";
import { iconMap } from "@/lib/icons";
import { ArrowUpRightIcon } from "@/components/icons/ArrowUpRightIcon";

type ProjectCardProps = {
  item: ProjectItem;
  rotation: string;
  zClass: string;
  isLast: boolean;
};

export function ProjectCard({
  item,
  rotation,
  zClass,
  isLast,
}: ProjectCardProps) {
  const Icon = iconMap[item.icon];
  const Tag = item.comingSoon ? "div" : "a";

  return (
    <Tag
      {...(!item.comingSoon ? { href: item.href, target: "_blank" } : {})}
      className={[
        "group relative flex h-60 w-[min(248px,78vw)] shrink-0 flex-col overflow-hidden rounded-2xl outline-1 outline-border-strong bg-surface transition-[transform,box-shadow] duration-200",
        "hover:z-50 hover:scale-[1.02] hover:shadow-sm",
        "focus-visible:z-50 focus-visible:outline-2 focus-visible:outline-offset-2",
        item.comingSoon ? "cursor-not-allowed" : "",
        rotation,
        zClass,
        isLast ? "" : "sm:-mr-14",
      ].join(" ")}
    >
      <div className="flex-1 p-3 pb-0">
        <div className="flex h-full items-center justify-center rounded-xl bg-surface-higher/50 outline-1 outline-border-strong">
          <Icon className="h-10 w-10 text-text" label={item.iconLabel} />
        </div>
      </div>

      <div className="flex flex-col gap-1 p-4">
        <p className="flex items-center gap-1.5 text-sm font-medium leading-snug tracking-tight text-text">
          {item.title}
          {item.comingSoon ? (
            <span className="rounded-full bg-surface-higher px-1.5 py-0.5 text-[10px] font-medium text-text-muted opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              Coming soon
            </span>
          ) : (
            <ArrowUpRightIcon className="size-3.5 text-text-muted opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
          )}
        </p>
        <p className="text-[13px] leading-normal text-text-muted sm:text-[12px]">
          {item.description}
        </p>
      </div>
    </Tag>
  );
}
