import { ReactNode } from "react";

type PageHeaderProps = {
  kicker?: string;
  title: ReactNode;
  lede?: ReactNode;
  meta?: ReactNode;
};

export default function PageHeader({
  kicker,
  title,
  lede,
  meta,
}: PageHeaderProps) {
  return (
    <header style={{ paddingTop: 80, paddingBottom: 56 }}>
      <div className="container">
        {kicker && (
          <div
            className="upcase-mono"
            style={{ color: "var(--accent)", marginBottom: 28 }}
          >
            {kicker}
          </div>
        )}
        <h1
          className="serif"
          style={{
            fontSize: "clamp(48px, 7.5vw, 96px)",
            lineHeight: 0.98,
            letterSpacing: "-0.025em",
            marginBottom: 28,
          }}
        >
          {title}
        </h1>
        {lede && (
          <p
            className="lede"
            style={{ maxWidth: 760, color: "var(--ink-soft)" }}
          >
            {lede}
          </p>
        )}
        {meta && (
          <div
            style={{
              marginTop: 36,
              display: "flex",
              flexWrap: "wrap",
              gap: 24,
              alignItems: "center",
            }}
          >
            {meta}
          </div>
        )}
      </div>
    </header>
  );
}
