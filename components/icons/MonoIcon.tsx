export function MonoIcon({
  className,
  label,
}: {
  className?: string;
  label?: string;
}) {
  return (
    <span className={`text-[12px] text-text-muted ${className ?? ""}`}>
      {label ?? "$ > _"}
    </span>
  );
}
