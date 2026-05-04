import { ReactNode } from "react";
import ProjectLinks, { ProjectLink } from "./ProjectLinks";

type ProjectHeroProps = {
  num: string;
  name: ReactNode;
  oneLine: ReactNode;
  stack: string[];
  role: string;
  year: string;
  status: string;
  links?: ProjectLink[];
};

export default function ProjectHero({
  num,
  name,
  oneLine,
  stack,
  role,
  year,
  status,
  links,
}: ProjectHeroProps) {
  const facts = [
    { k: "Role", v: role },
    { k: "Year", v: year },
    { k: "Status", v: status },
    { k: "Type", v: "Case study" },
  ];
  return (
    <header style={{ paddingTop: 72, paddingBottom: 48 }}>
      <div className="container">
        <div
          className="upcase-mono fade-up"
          style={{ color: "var(--accent)", marginBottom: 28 }}
        >
          {num} · Eskwelabs Innovation Fellowship
        </div>
        <h1
          className="serif fade-up"
          style={{
            fontSize: "clamp(40px, 6.5vw, 84px)",
            lineHeight: 1.02,
            letterSpacing: "-0.025em",
            marginBottom: 24,
            maxWidth: "16ch",
            animationDelay: "60ms",
          }}
        >
          {name}
        </h1>
        <p
          className="lede fade-up"
          style={{
            maxWidth: 760,
            color: "var(--ink-soft)",
            animationDelay: "140ms",
          }}
        >
          {oneLine}
        </p>

        <div
          className="fade-up"
          style={{
            marginTop: 56,
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            borderTop: "1px solid var(--line)",
            borderBottom: "1px solid var(--line)",
            animationDelay: "220ms",
          }}
        >
          {facts.map((it, i) => (
            <div
              key={it.k}
              style={{
                padding: "20px 24px",
                borderRight: i < 3 ? "1px solid var(--line)" : "none",
              }}
            >
              <div
                className="upcase-mono"
                style={{ color: "var(--ink-mute)", marginBottom: 10 }}
              >
                {it.k}
              </div>
              <div style={{ fontSize: 15, color: "var(--ink)" }}>{it.v}</div>
            </div>
          ))}
        </div>

        <div
          style={{ marginTop: 28, display: "flex", flexWrap: "wrap", gap: 6 }}
        >
          {stack.map((s) => (
            <span key={s} className="tag">
              {s}
            </span>
          ))}
        </div>

        {links && links.length > 0 && (
          <div style={{ marginTop: 32 }}>
            <ProjectLinks links={links} />
          </div>
        )}
      </div>
    </header>
  );
}
