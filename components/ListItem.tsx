type ListItemProps = {
  /** Drives which of four abstract marks is shown (seed % 4). */
  seed: number;
};

/**
 * Small decorative "page" thumbnail mark used in list rows.
 * Displays one of four patterns: dots, lines, ring, or corner brackets.
 */
export function ListItem({ seed }: ListItemProps) {
  const pattern = seed % 4;

  return (
    <span
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border bg-surface-2 text-text-muted"
      aria-hidden
    >
      {pattern === 0 && <DotsPattern />}
      {pattern === 1 && <LinesPattern />}
      {pattern === 2 && <RingPattern />}
      {pattern === 3 && <CornersPattern />}
    </span>
  );
}

function DotsPattern() {
  return (
    <span className="grid grid-cols-2 gap-0.5">
      <span className="size-1 rounded-[1px] bg-text-muted" />
      <span className="size-1 rounded-[1px] bg-text-muted" />
      <span className="size-1 rounded-[1px] bg-text-muted" />
      <span className="size-1 rounded-[1px] bg-text-muted" />
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
