export function MonoIcon({
  className,
  label,
}: {
  className?: string;
  label?: string;
}) {
  return (
    <span className={`font-sans text-[12px] text-text-muted ${className ?? ""}`}>
      {label ?? "$ > _"}
    </span>
  );
}
