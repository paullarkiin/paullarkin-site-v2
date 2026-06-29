export function GridIcon({ className }: { className?: string }) {
  return (
    <span className={`flex h-3.5 items-end gap-0.5 ${className ?? ""}`}>
      <span className="w-0.5 h-2/4 rounded-full bg-current" />
      <span className="w-0.5 h-full rounded-full bg-current" />
      <span className="w-0.5 h-3/4 rounded-full bg-current" />
    </span>
  );
}
