"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { iconMap } from "@/lib/icons";

const iconNames = Object.keys(iconMap);

// Deterministically map a pathname to an icon so the same page always shows the
// same icon. Keeps render pure and avoids server/client hydration mismatches.
function iconForPath(pathname: string) {
  let hash = 0;
  for (let i = 0; i < pathname.length; i++) {
    hash = (hash * 31 + pathname.charCodeAt(i)) | 0;
  }
  return iconMap[iconNames[Math.abs(hash) % iconNames.length]];
}

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Writing", href: "/writing" },
  { label: "Playground", href: "#" },
];

function navItemActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

type FloatingBottomNavProps = {
  /** Higher contrast on near-black canvases. */
  variant?: "default" | "onDark";
};

export function FloatingBottomNav({
  variant = "default",
}: FloatingBottomNavProps) {
  const pathname = usePathname();
  const isDark = variant === "onDark";

  const ActiveIcon = iconForPath(pathname);

  const shell = isDark
    ? "border-white/12 bg-white/[0.07] shadow-lg"
    : "border-border-strong bg-surface/90 shadow-lg";

  return (
    <nav
      className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center px-3 pb-[max(16px,env(safe-area-inset-bottom))] pt-4"
      style={{ viewTransitionName: "floating-nav" }}
      aria-label="Primary pages"
    >
      <div
        className={`pointer-events-auto flex max-w-full items-center gap-0.5 overflow-x-auto rounded-2xl border px-1 py-1 backdrop-blur-md [-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden sm:gap-1 sm:px-1.5 ${shell}`}
      >
        {navItems.map((item) => {
          const active = navItemActive(pathname, item.href);
          const base =
            "shrink-0 rounded-xl px-3 py-2.5 text-[14px] font-medium transition-colors sm:px-3.5";
          const state = isDark
            ? active
              ? "bg-white/14 text-white shadow-sm"
              : "text-neutral-400 hover:bg-white/10 hover:text-neutral-100"
            : active
              ? "bg-[#f8f8f8] text-text"
              : "text-text-muted hover:bg-surface-higher hover:text-text";
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`${base} ${active ? "flex items-center gap-1.5" : ""} ${state}`}
              aria-current={active ? "page" : undefined}
            >
              {active ? <ActiveIcon aria-hidden /> : null}
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
