export function BarsIcon({ className }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-1 w-1/2 ${className ?? ""}`}>
      <span className="block h-1 rounded-xs bg-text-muted" />
      <span className="block h-1 rounded-xs bg-text-muted w-[70%]" />
      <span className="block h-1 rounded-xs bg-text w-[40%]" />
    </div>
  );
}
