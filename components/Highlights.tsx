import { ReactNode, Children } from "react";

export function Highlights({ children }: { children: ReactNode }) {
  const items = Children.toArray(children);
  return (
    <aside
      aria-label="Highlights"
      className="not-prose my-10 rounded-xl border border-border bg-surface-higher px-6 py-5"
    >
      <p className="mb-3.5 font-mono text-xs tracking-[0.08em] text-text-muted">
        TL;DR
      </p>
      <ul className="flex flex-col gap-2.5">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-baseline gap-2.5 text-sm leading-relaxed"
          >
            <span aria-hidden className="text-[13px] text-mint">
              →
            </span>
            <span className="[&_strong]:font-normal [&_strong]:text-mint">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
