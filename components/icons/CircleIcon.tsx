export function CircleIcon({ className }: { className?: string }) {
  return (
    <div
      className={`h-7 w-7 rounded-full border-[1.5px] border-text flex items-center justify-center ${className ?? ""}`}
    >
      <span className="h-3 w-3 rounded-full bg-text" />
    </div>
  );
}
