import { ReactNode } from "react";

type ContributionBlockProps = {
  idx: number;
  title: string;
  children: ReactNode;
};

export default function ContributionBlock({
  idx,
  title,
  children,
}: ContributionBlockProps) {
  return (
    <div
      style={{
        borderTop: "1px solid var(--line)",
        paddingTop: 28,
        marginTop: 28,
        display: "grid",
        gridTemplateColumns: "60px 1fr",
        gap: 32,
      }}
    >
      <div
        className="serif"
        style={{
          fontSize: 36,
          color: "var(--accent)",
          lineHeight: 1,
          letterSpacing: "-0.02em",
        }}
      >
        0{idx}
      </div>
      <div>
        <h4
          className="serif"
          style={{
            fontSize: 22,
            marginBottom: 12,
            letterSpacing: "-0.01em",
            color: "var(--ink)",
          }}
        >
          {title}
        </h4>
        <div className="prose">{children}</div>
      </div>
    </div>
  );
}
