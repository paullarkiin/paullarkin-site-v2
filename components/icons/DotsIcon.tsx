export function DotsIcon({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="flex gap-1.5">
        <span className="h-2 w-2 rounded-xs bg-text-dim" />
        <span className="h-2 w-2 rounded-xs bg-text-dim" />
        <span className="h-2 w-2 rounded-xs bg-text" />
      </div>
    </div>
  );
}
