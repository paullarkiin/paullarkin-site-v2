import type { LabItem } from "@/lib/site";
import { ArrowUpRightIcon } from "@/components/icons/ArrowUpRightIcon";

type LabCardProps = {
  item: LabItem;
};

export function LabCard({ item }: LabCardProps) {
  return (
    <a
      href={item.href}
      target="_blank"
      className="group flex flex-col gap-3.5 rounded-xl bg-surface/90 p-4"
    >
      <div className="aspect-16/10 flex items-center justify-center rounded-md border border-border-strong bg-surface-2/50">
        <Preview kind={item.preview} label={item.previewLabel} />
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

function Preview({
  kind,
  label,
}: {
  kind: LabItem["preview"];
  label?: string;
}) {
  switch (kind) {
    case "dots":
      return (
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-xs bg-text-dim" />
          <span className="h-2 w-2 rounded-xs bg-text-dim" />
          <span className="h-2 w-2 rounded-xs bg-text" />
        </div>
      );

    case "mono":
      return (
        <span className="font-sans text-[12px] text-text-muted">
          {label ?? "$ > _"}
        </span>
      );

    case "bars":
      return (
        <div className="flex flex-col gap-1 w-1/2">
          <span className="block h-1 rounded-xs bg-text-dim" />
          <span className="block h-1 rounded-xs bg-text-dim w-[70%]" />
          <span className="block h-1 rounded-xs bg-text w-[40%]" />
        </div>
      );

    case "circle":
      return (
        <div className="h-7 w-7 rounded-full border-[1.5px] border-text flex items-center justify-center">
          <span className="h-3 w-3 rounded-full bg-text" />
        </div>
      );
  }
}
