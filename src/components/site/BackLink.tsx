import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
};

/** Premium back control used on secondary pages */
export function BackLink({ href, children, className = "" }: Props) {
  return (
    <Link
      href={href}
      data-cursor-hover
      className={`back-link group inline-flex items-center gap-2.5 rounded-full border border-[color:var(--line)] bg-[color:var(--bg-elevated)] px-4 py-2.5 text-sm font-medium text-[color:var(--ink)] shadow-[0_6px_20px_rgba(22,48,72,0.06)] transition duration-300 hover:border-[color:var(--gold)] hover:text-[color:var(--navy-deep)] hover:shadow-[0_10px_28px_rgba(184,146,47,0.16)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--gold)] ${className}`}
    >
      <span
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[color:var(--surface)] text-[color:var(--gold)] transition duration-300 group-hover:bg-[color:var(--gold)] group-hover:text-[#0a0c10]"
        aria-hidden
      >
        <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" />
      </span>
      <span>{children}</span>
    </Link>
  );
}
