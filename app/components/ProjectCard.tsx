import Link from "next/link";

type ProjectCardProps = {
  num: string;
  title: string;
  tag: string;
  stack: string[];
  ph: string;
  to: string;
};

export default function ProjectCard({
  num,
  title,
  tag,
  stack,
  ph,
  to,
}: ProjectCardProps) {
  return (
    <Link href={to} className="proj-card" style={{ textDecoration: "none" }}>
      <div style={{ aspectRatio: "16/10" }}>
        <div
          className="ph"
          style={{
            height: "100%",
            border: "none",
            borderRadius: 0,
          }}
        >
          <span className="ph-label">{ph}</span>
        </div>
      </div>
      <div className="proj-card-body">
        <div className="proj-num">{num}</div>
        <h3 className="proj-title">{title}</h3>
        <div className="proj-tag">{tag}</div>
        <div className="proj-stack">
          {stack.map((s) => (
            <span key={s} className="tag">
              {s}
            </span>
          ))}
        </div>
        <div
          style={{
            marginTop: 22,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <span
            style={{
              color: "var(--accent-ink)",
              fontSize: 14,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            View case study <span>→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
