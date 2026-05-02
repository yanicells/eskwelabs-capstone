type Item = {
  label: string;
  value: string;
  href?: string;
  note?: string;
};

export default function DeliverablesList({ items }: { items: Item[] }) {
  return (
    <div style={{ marginTop: 32 }}>
      {items.map((it, i) => (
        <div
          key={it.label}
          style={{
            padding: "20px 0",
            borderTop: i === 0 ? "1px solid var(--line)" : "none",
            borderBottom: "1px solid var(--line)",
            display: "grid",
            gridTemplateColumns: "180px 1fr auto",
            gap: 24,
            alignItems: "center",
          }}
        >
          <div
            className="upcase-mono"
            style={{ color: "var(--ink-mute)" }}
          >
            {it.label}
          </div>
          <div style={{ fontSize: 15, color: "var(--ink)" }}>{it.value}</div>
          {it.href ? (
            <a
              href={it.href}
              className="link-inline"
              style={{ fontSize: 14 }}
              target={it.href.startsWith("http") ? "_blank" : undefined}
              rel={
                it.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
            >
              open →
            </a>
          ) : (
            <span className="tag">{it.note || "pending"}</span>
          )}
        </div>
      ))}
    </div>
  );
}
