"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, PenLine, User, type LucideIcon } from "lucide-react";

type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: User },
  { label: "Writing", href: "/writing", icon: PenLine },
];

function navItemActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function FloatingBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center px-3 pb-[max(1rem,env(safe-area-inset-bottom))]"
      style={{ viewTransitionName: "floating-nav" }}
      aria-label="Primary pages"
    >
      <div className="pointer-events-auto flex items-center gap-1 rounded-2xl border border-border-strong bg-surface/90 p-1 shadow-lg backdrop-blur-md">
        {navItems.map((item) => {
          const active = navItemActive(pathname, item.href);
          const Icon = item.icon;

          const base =
            "flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-xl px-3 py-2.5 text-sm font-medium transition-colors duration-200";

          const state = active
            ? "bg-background"
            : "text-text-muted hover:bg-surface-higher hover:text-text";

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`${base} ${state}`}
              aria-label={item.label}
              aria-current={active ? "page" : undefined}
            >
              <Icon
                className="size-4.5 shrink-0"
                strokeWidth={active ? 2 : 1.75}
                aria-hidden="true"
              />
              <span
                className={`grid overflow-hidden transition-all duration-300 ease-out ${
                  active ? "ml-1.5 grid-cols-[1fr]" : "grid-cols-[0fr]"
                }`}
              >
                <span className="min-w-0 overflow-hidden whitespace-nowrap">
                  {item.label}
                </span>
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
