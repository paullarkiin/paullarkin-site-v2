import type { LabItem } from "@/lib/site";
import { ArrowUpRightIcon } from "@/components/icons/ArrowUpRightIcon";
import { iconMap } from "@/lib/icons";

type LabCardProps = {
  item: LabItem;
};

export function LabCard({ item }: LabCardProps) {
  const Icon = iconMap[item.icon];

  return (
    <a
      href={item.href}
      target="_blank"
      className="group flex flex-col gap-3.5 rounded-xl bg-surface/90 p-4"
    >
      <div className="aspect-16/10 flex items-center justify-center rounded-md border border-border-strong bg-surface-2/50">
        <Icon className="h-7 w-7 text-text" label={item.iconLabel} />
      </div>

      <div>
        <p className="flex items-center gap-1.5 text-[14px] font-medium text-text">
          {item.title}
          <ArrowUpRightIcon className="size-3.5 opacity-0 transition-opacity duration-200 group-hover:opacity-100 text-text-muted" />
        </p>
        <p className="text-[12px] text-text-muted leading-normal mt-0.5">
          {item.description}
        </p>
      </div>
    </a>
  );
}
