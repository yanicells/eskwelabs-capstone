"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Glyph from "./Glyph";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects/slide-deck-generator", label: "Project I" },
  { href: "/projects/thought-leader-drafter", label: "Project II" },
  { href: "/reflection", label: "Reflection" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href;

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-mark" aria-label="Home">
          <Glyph size={20} />
          <span>Yani</span>
          <span className="dot" aria-hidden="true"></span>
        </Link>
        <div className="nav-links">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={"nav-link" + (isActive(l.href) ? " active" : "")}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="nav-meta">
          <span className="ping"></span>
          <span>Open to SWE internships</span>
        </div>
      </div>
    </nav>
  );
}
