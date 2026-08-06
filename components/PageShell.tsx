import type { ReactNode } from "react";

type PageShellProps = {
  as?: "main" | "article";
  children: ReactNode;
  className?: string;
};

export function PageShell({
  as: Component = "main",
  children,
  className,
}: PageShellProps) {
  return (
    <div className="flex flex-1 flex-col items-center">
      <Component
        className={`flex w-full max-w-3xl flex-1 flex-col px-6 sm:px-16${
          className ? ` ${className}` : ""
        }`}
      >
        {children}
      </Component>
    </div>
  );
}
