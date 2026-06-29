export function LayersIcon({ className }: { className?: string }) {
  return (
    <span className={`grid size-2.5 grid-cols-2 gap-0.5 ${className ?? ""}`}>
      <span className="rounded-[1px] bg-current" />
      <span className="rounded-[1px] bg-current" />
      <span className="rounded-[1px] bg-current" />
      <span className="rounded-[1px] bg-current" />
    </span>
  );
}
