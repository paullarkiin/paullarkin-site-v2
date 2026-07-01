import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function BackLink({ href = "/" }: { href?: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-text transition-colors mb-8"
    >
      <ArrowLeft className="size-3.5" />
      Back
    </Link>
  );
}
