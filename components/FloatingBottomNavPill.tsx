"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, PenLine, Sparkles, User, type LucideIcon } from "lucide-react";

// Prototype variant of the floating nav inspired by the "pill" pattern: the
// active item expands to reveal its label + icon, while inactive items collapse
// to an icon only. Kept separate from FloatingBottomNav so both can be compared.

type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: User },
  { label: "Writing", href: "/writing", icon: PenLine },
  { label: "Playground", href: "#", icon: Sparkles },
];

function navItemActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

type FloatingBottomNavPillProps = {
  /** Higher contrast on near-black canvases. */
  variant?: "default" | "onDark";
};

export function FloatingBottomNavPill({
  variant = "default",
}: FloatingBottomNavPillProps) {
  const pathname = usePathname();
  const isDark = variant === "onDark";

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
          const Icon = item.icon;

          // Base sizing: icon-only items are square; the active item grows to
          // fit its label. transition-all + the grid trick animate the width.
          const base =
            "group flex shrink-0 items-center rounded-xl py-2.5 text-[14px] font-medium transition-all duration-300 ease-out";

          const state = isDark
            ? active
              ? "bg-white/14 text-white shadow-sm px-3.5"
              : "text-neutral-400 hover:bg-white/10 hover:text-neutral-100 px-2.5"
            : active
              ? "bg-[#f8f8f8] text-text px-3.5"
              : "text-text-muted hover:bg-surface-higher hover:text-text px-2.5";

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`${base} ${state}`}
              aria-current={active ? "page" : undefined}
            >
              <Icon
                className="size-[18px] shrink-0"
                strokeWidth={active ? 2.25 : 1.75}
                aria-hidden
              />
              {/* Grid-columns trick: animate from 0fr -> 1fr to reveal the
                  label's intrinsic width smoothly instead of snapping. */}
              <span
                className={`grid overflow-hidden transition-all duration-300 ease-out ${
                  active ? "ml-1.5 grid-cols-[1fr]" : "grid-cols-[0fr]"
                }`}
              >
                <span className="min-w-0 overflow-hidden whitespace-nowrap">
                  {item.label}
                </span>
              </span>
              {/* Screen readers should always hear the label even when the
                  visual text is collapsed to zero width. */}
              {!active ? <span className="sr-only">{item.label}</span> : null}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
