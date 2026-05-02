"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects/thought-leader-drafter", label: "Thought Leader Drafter" },
  { href: "/projects/slide-deck-generator", label: "Slide Deck Generator" },
  { href: "/reflection", label: "Reflection" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href;

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <Link href="/" className="nav-mark" aria-label="Home">
            <span>Yani</span>
            <span className="dot">.</span>
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
          <button
            type="button"
            className="nav-burger"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <span className="nav-burger-icon" aria-hidden="true"></span>
            Menu
          </button>
        </div>
      </nav>

      {open && (
        <div className="nav-drawer" role="dialog" aria-modal="true">
          <div className="nav-drawer-top">
            <Link href="/" className="nav-mark" onClick={() => setOpen(false)}>
              <span>Yani</span>
              <span className="dot">.</span>
            </Link>
            <button
              type="button"
              className="nav-drawer-close"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              Close
            </button>
          </div>
          <div className="nav-drawer-list">
            {links.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                className={isActive(l.href) ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                <span>{l.label}</span>
                <span className="num">{String(i).padStart(2, "0")}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
