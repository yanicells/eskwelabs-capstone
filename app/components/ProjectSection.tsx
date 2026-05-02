import { ReactNode } from "react";
import SectionMark from "./SectionMark";

type ProjectSectionProps = {
  num: string;
  label: string;
  title?: ReactNode;
  children: ReactNode;
  anchor?: string;
  accent?: boolean;
};

export default function ProjectSection({
  num,
  label,
  title,
  children,
  anchor,
  accent,
}: ProjectSectionProps) {
  return (
    <section
      id={anchor}
      style={{
        background: accent ? "var(--bg-soft)" : "transparent",
        borderTop: accent ? "1px solid var(--line)" : "none",
        borderBottom: accent ? "1px solid var(--line)" : "none",
        padding: accent ? "100px 0" : "80px 0",
      }}
    >
      <div className="container">
        <div className="grid-rail">
          <div>
            <SectionMark num={num} label={label} />
            {title && (
              <h3
                className="serif"
                style={{
                  fontSize: 32,
                  lineHeight: 1.08,
                  letterSpacing: "-0.02em",
                  marginTop: 24,
                  color: "var(--ink)",
                }}
              >
                {title}
              </h3>
            )}
          </div>
          <div className="prose">{children}</div>
        </div>
      </div>
    </section>
  );
}
