import type { ReactNode } from "react";

type HeaderProps = {
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
};

export function Header({ title, subtitle, children }: HeaderProps) {
  return (
    <header className="mb-12">
      <h1 className="text-base font-semibold leading-tight">{title}</h1>
      {subtitle ? (
        <div className="mt-0.5 text-base text-text-muted">{subtitle}</div>
      ) : null}
      {children}
    </header>
  );
}
