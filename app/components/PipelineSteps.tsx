import { ReactNode } from "react";

type Step = {
  title: ReactNode;
  body: ReactNode;
};

export default function PipelineSteps({ steps }: { steps: Step[] }) {
  return (
    <ol
      style={{
        listStyle: "none",
        padding: 0,
        margin: "32px 0",
        display: "flex",
        flexDirection: "column",
        gap: 0,
        borderTop: "1px solid var(--line)",
      }}
    >
      {steps.map((s, i) => (
        <li
          key={i}
          style={{
            padding: "22px 0",
            borderBottom: "1px solid var(--line)",
            display: "grid",
            gridTemplateColumns: "60px 1fr",
            gap: 24,
            alignItems: "start",
          }}
        >
          <div
            className="mono"
            style={{
              color: "var(--accent)",
              fontSize: 13,
              letterSpacing: "0.05em",
              paddingTop: 4,
            }}
          >
            {String(i + 1).padStart(2, "0")}
          </div>
          <div>
            <div
              style={{
                fontSize: 17,
                color: "var(--ink)",
                fontWeight: 500,
                marginBottom: 4,
              }}
            >
              {s.title}
            </div>
            <div
              style={{
                fontSize: 15,
                color: "var(--ink-soft)",
                lineHeight: 1.6,
              }}
            >
              {s.body}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
