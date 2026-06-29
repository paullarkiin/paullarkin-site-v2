import { iconMap, type IconName } from "@/lib/icons";

type IconBadgeProps = {
  icon: IconName;
};

export function IconBadge({ icon }: IconBadgeProps) {
  const Icon = iconMap[icon];

  return (
    <span
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border-strong bg-surface/90 text-text-muted"
      aria-hidden
    >
      <Icon />
    </span>
  );
}
