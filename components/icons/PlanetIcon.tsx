export function PlanetIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <circle cx="12" cy="2" r="2" opacity="0.3" />
      <circle cx="15" cy="11" r="3" opacity="0.6" />
      <circle cx="2" cy="14" r="2" opacity="0.4" />
      <circle cx="13" cy="19" r="1" opacity="0.25" />
      <circle cx="7" cy="13" r="1" opacity="0.5" />
    </svg>
  );
}
