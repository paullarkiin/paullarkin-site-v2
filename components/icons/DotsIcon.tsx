export function DotsIcon({ className }: { className?: string }) {
  return (
    <span className={`flex gap-1.5 ${className ?? ""}`}>
      <span className="h-2 w-2 rounded-xs bg-current opacity-40" />
      <span className="h-2 w-2 rounded-xs bg-current opacity-40" />
      <span className="h-2 w-2 rounded-xs bg-current" />
    </span>
  );
}
