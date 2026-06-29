export function ChatIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
    >
      {/* Large 4-pointed star */}
      <path
        d="M7.5 1 Q7.5 7.5 14 7.5 Q7.5 7.5 7.5 14 Q7.5 7.5 1 7.5 Q7.5 7.5 7.5 1 Z"
        fill="currentColor"
      />
      {/* Small 4-pointed star */}
      <path
        d="M13.5 10.5 Q13 13 16.5 13 Q13 13 13 16.5 Q13 13 10 13 Q13 13 13.5 10.5 Z"
        fill="currentColor"
      />
    </svg>
  );
}
