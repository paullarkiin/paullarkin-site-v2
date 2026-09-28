"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import type { MouseEvent } from "react";

export function BackLink({ href = "/" }: { href?: string }) {
  const router = useRouter();

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      window.history.length <= 1
    ) {
      return;
    }

    event.preventDefault();
    router.back();
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-text transition-colors mb-8"
    >
      <ArrowLeft className="size-3.5" aria-hidden="true" />
      Back
    </Link>
  );
}
