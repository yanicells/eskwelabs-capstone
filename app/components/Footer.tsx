import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects/slide-deck-generator", label: "Slide Deck Generator" },
  { href: "/projects/thought-leader-drafter", label: "Thought Leader Drafter" },
  { href: "/reflection", label: "Reflection" },
  { href: "/contact", label: "Contact" },
];

const contactLinks = [
  { href: "https://yanicells.dev", label: "Portfolio" },
  { href: "https://github.com/yanicells", label: "GitHub" },
  { href: "https://linkedin.com/in/yanicells", label: "LinkedIn" },
  { href: "mailto:edrianmiguelcapistrano@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 mt-16">
      <div className="max-w-3xl mx-auto px-6 py-8 flex flex-col gap-6 text-sm">
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:underline">
              {l.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {contactLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:underline"
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {l.label}
            </a>
          ))}
        </div>
        <p className="text-xs text-zinc-500">
          © {new Date().getFullYear()} Edrian Miguel Capistrano
        </p>
      </div>
    </footer>
  );
}
