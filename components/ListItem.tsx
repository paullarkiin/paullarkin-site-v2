type ListItemProps = {
  /** Drives which of four abstract marks is shown (seed % 4). */
  seed: number;
  /** Force a specific pattern instead of cycling. */
  variant?: "dots" | "lines" | "ring" | "corners" | "grid" | "chat" | "layers";
};

/**
 * Small decorative "page" thumbnail mark used in list rows.
 * Displays one of four patterns: dots, lines, ring, or corner brackets.
 */
export function ListItem({ seed, variant }: ListItemProps) {
  const pattern = variant
    ? { dots: 0, lines: 1, ring: 2, corners: 3, grid: 4, chat: 5, layers: 6 }[variant]
    : seed % 4;

  return (
    <span
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border-strong bg-surface/90 text-text-muted"
      aria-hidden
    >
      {pattern === 0 && <RingPattern />}
      {pattern === 1 && <LinesPattern />}
      {pattern === 2 && <DotsPattern />}
      {pattern === 3 && <CornersPattern />}
      {pattern === 4 && <GridPattern />}
      {pattern === 5 && <ChatPattern />}
      {pattern === 6 && <LayersPattern />}
    </span>
  );
}

function DotsPattern() {
  return (
    <span className="grid size-3 grid-cols-2 gap-0.5">
      <span className="rounded-[1px] bg-text-muted" />
      <span className="rounded-[1px] bg-text-muted" />
      <span className="rounded-[1px] bg-text-muted" />
      <span className="rounded-[1px] bg-text-muted" />
    </span>
  );
}

function LinesPattern() {
  return (
    <span className="flex w-4 flex-col gap-0.5">
      <span className="h-0.5 rounded-full bg-text-muted" />
      <span className="h-0.5 w-[70%] rounded-full bg-text-muted" />
      <span className="h-0.5 w-[40%] rounded-full bg-text-muted" />
    </span>
  );
}

function RingPattern() {
  return <span className="size-3 rounded-full border-2 border-text-muted" />;
}

function CornersPattern() {
  return (
    <span className="relative flex h-3.5 w-3.5 items-center justify-center">
      <span className="absolute left-0 top-0 h-2 w-2 border-l-2 border-t-2 border-text-muted" />
      <span className="absolute bottom-0 right-0 h-2 w-2 border-b-2 border-r-2 border-text-muted" />
    </span>
  );
}

function GridPattern() {
  return (
    <span className="flex h-3.5 items-end gap-0.5">
      <span className="w-0.5 h-2/4 rounded-full bg-text-muted" />
      <span className="w-0.5 h-full rounded-full bg-text-muted" />
      <span className="w-0.5 h-3/4 rounded-full bg-text-muted" />
    </span>
  );
}

function LayersPattern() {
  return (
    <span className="grid size-2.5 grid-cols-2 gap-0.5">
      <span className="rounded-[1px] bg-text-muted" />
      <span className="rounded-[1px] bg-text-muted" />
      <span className="rounded-[1px] bg-text-muted" />
      <span className="rounded-[1px] bg-text-muted" />
    </span>
  );
}

function ChatPattern() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-text-muted">
      {/* Large 4-pointed star */}
      <path d="M7.5 1 Q7.5 7.5 14 7.5 Q7.5 7.5 7.5 14 Q7.5 7.5 1 7.5 Q7.5 7.5 7.5 1 Z" fill="currentColor" />
      {/* Small 4-pointed star */}
      <path d="M13.5 10.5 Q13 13 16.5 13 Q13 13 13 16.5 Q13 13 10 13 Q13 13 13.5 10.5 Z" fill="currentColor" />
    </svg>
  );
}
