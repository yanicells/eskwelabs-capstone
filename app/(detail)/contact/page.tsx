import PageHeader from "../../components/PageHeader";
import SectionMark from "../../components/SectionMark";

const links = [
  {
    label: "Email",
    display: "edrianmiguelcapistrano@gmail.com",
    href: "mailto:edrianmiguelcapistrano@gmail.com",
    primary: true,
  },
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
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        kicker="Contact"
        title="Get in touch"
        lede="If you want to talk about a role, a project, or anything else, the easiest ways to reach me."
      />

      <section style={{ padding: "20px 0 100px" }}>
        <div className="container">
          <div className="grid-rail">
            <div>
              <SectionMark num="01" label="Channels" />
            </div>
            <div>
              <div style={{ borderTop: "1px solid var(--line)" }}>
                {links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      l.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    style={{
                      display: "grid",
                      gridTemplateColumns: "140px minmax(0, 1fr) 32px",
                      gap: 20,
                      padding: "28px 0",
                      borderBottom: "1px solid var(--line)",
                      alignItems: "center",
                    }}
                  >
                    <div
                      className="upcase-mono"
                      style={{
                        color: l.primary
                          ? "var(--accent)"
                          : "var(--ink-mute)",
                      }}
                    >
                      {l.label}
                    </div>
                    <div
                      className="serif"
                      style={{
                        fontSize: "clamp(18px, 2.4vw, 26px)",
                        color: "var(--ink)",
                        letterSpacing: "-0.015em",
                        lineHeight: 1.18,
                        wordBreak: "break-word",
                        minWidth: 0,
                      }}
                    >
                      {l.display}
                    </div>
                    <div
                      style={{
                        color: "var(--accent)",
                        fontSize: 22,
                        textAlign: "right",
                      }}
                    >
                      ↗
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
