export function LayersIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <rect x="1" y="1" width="12" height="12" rx="2" opacity="0.15" />
      <rect x="6" y="6" width="12" height="12" rx="2" opacity="0.35" />
      <rect x="11" y="11" width="12" height="12" rx="2" opacity="0.6" />
    </svg>
  );
}
