import Link from "next/link";

type NextProjectProps = {
  to: string;
  num: string;
  title: string;
  tag: string;
};

export default function NextProject({
  to,
  num,
  title,
  tag,
}: NextProjectProps) {
  return (
    <section
      style={{ padding: "100px 0 60px", borderTop: "1px solid var(--line)" }}
    >
      <div className="container">
        <div
          className="upcase-mono"
          style={{ color: "var(--ink-mute)", marginBottom: 24 }}
        >
          Next case study
        </div>
        <Link
          href={to}
          style={{
            display: "block",
            cursor: "pointer",
            padding: "32px 0",
            borderTop: "1px solid var(--line)",
            borderBottom: "1px solid var(--line)",
            transition: "all 200ms ease",
          }}
        >
          <div className="grid-2" style={{ alignItems: "center", gap: 32 }}>
            <div>
              <div className="proj-num" style={{ marginBottom: 12 }}>
                {num}
              </div>
              <h3
                className="serif"
                style={{
                  fontSize: 40,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.06,
                  color: "var(--ink)",
                }}
              >
                {title}
              </h3>
              <div
                style={{
                  marginTop: 12,
                  color: "var(--ink-soft)",
                  fontSize: 15,
                }}
              >
                {tag}
              </div>
            </div>
            <div
              style={{
                textAlign: "right",
                fontSize: 28,
                color: "var(--accent)",
              }}
            >
              →
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
