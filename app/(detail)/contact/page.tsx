const contactLinks = [
  {
    label: "Portfolio",
    display: "yanicells.dev",
    href: "https://yanicells.dev",
  },
  {
    label: "GitHub",
    display: "github.com/yanicells",
    href: "https://github.com/yanicells",
  },
  {
    label: "LinkedIn",
    display: "linkedin.com/in/yanicells",
    href: "https://linkedin.com/in/yanicells",
  },
  {
    label: "Email",
    display: "edrianmiguelcapistrano@gmail.com",
    href: "mailto:edrianmiguelcapistrano@gmail.com",
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-2">
        <h1 className="text-4xl font-semibold tracking-tight">Get in touch</h1>
      </header>

      <p className="leading-relaxed">
        If you want to talk about a role, a project, or anything else, the
        easiest ways to reach me:
      </p>

      <ul className="flex flex-col gap-3">
        {contactLinks.map((c) => (
          <li key={c.href} className="flex flex-col sm:flex-row sm:gap-3">
            <span className="font-semibold w-24">{c.label}:</span>
            <a
              href={c.href}
              className="underline hover:no-underline"
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {c.display}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
