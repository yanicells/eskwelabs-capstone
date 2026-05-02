type ReflectionCardProps = {
  kicker: string;
  body: string[];
};

export default function ReflectionCard({
  kicker,
  body,
}: ReflectionCardProps) {
  return (
    <div
      style={{
        padding: "32px 28px",
        borderRight: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
        background: "var(--bg-card)",
      }}
    >
      <div
        className="upcase-mono"
        style={{ color: "var(--accent)", marginBottom: 22 }}
      >
        {kicker}
      </div>
      {body.map((p, i) => (
        <p
          key={i}
          style={{
            fontSize: 15,
            lineHeight: 1.65,
            color: "var(--ink-soft)",
            marginBottom: 12,
          }}
        >
          {p}
        </p>
      ))}
    </div>
  );
}
