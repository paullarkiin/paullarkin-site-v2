export function CircleIcon({ className }: { className?: string }) {
  return (
    <span
      className={`flex h-5 w-5 items-center justify-center rounded-full border-[1.5px] border-current ${className ?? ""}`}
    >
      <span className="h-2 w-2 rounded-full bg-current" />
    </span>
  );
}
