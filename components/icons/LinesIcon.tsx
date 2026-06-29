export function LinesIcon({ className }: { className?: string }) {
  return (
    <span className={`flex w-4 flex-col gap-0.5 ${className ?? ""}`}>
      <span className="h-0.5 rounded-full bg-current" />
      <span className="h-0.5 w-[70%] rounded-full bg-current" />
      <span className="h-0.5 w-[40%] rounded-full bg-current" />
    </span>
  );
}
