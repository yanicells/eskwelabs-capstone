import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects/slide-deck-generator", label: "Slide Deck Generator" },
  { href: "/projects/thought-leader-drafter", label: "Thought Leader Drafter" },
  { href: "/reflection", label: "Reflection" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="border-b border-zinc-200">
      <nav className="max-w-3xl mx-auto px-6 py-4 flex flex-wrap gap-x-6 gap-y-2">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="text-sm hover:underline">
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
