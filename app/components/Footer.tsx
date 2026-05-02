import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div style={{ minWidth: 0 }}>
          <div
            className="upcase-mono"
            style={{ color: "var(--ink-mute)", marginBottom: 14 }}
          >
            <span style={{ color: "var(--accent)" }}>●</span>
            &nbsp;&nbsp;Let&apos;s build something
          </div>
          <div className="footer-mark">
            Yani<span style={{ color: "var(--accent)" }}>.</span>
          </div>
          <div
            style={{
              marginTop: 20,
              fontSize: 14,
              color: "var(--ink-soft)",
              maxWidth: 420,
            }}
          >
            Edrian Miguel Capistrano — full-stack &amp; AI engineer. Currently
            2nd-year CS at Ateneo de Manila, going into 3rd this June.
          </div>
        </div>
        <div className="footer-meta" style={{ minWidth: 0 }}>
          <div style={{ wordBreak: "break-word" }}>
            <a href="mailto:edrianmiguelcapistrano@gmail.com">
              edrianmiguelcapistrano@gmail.com
            </a>
          </div>
          <div>
            <a
              href="https://github.com/yanicells"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/yanicells
            </a>
            <span style={{ margin: "0 6px" }}>·</span>
            <Link className="link-inline" href="/contact">
              see all
            </Link>
          </div>
          <div>
            <a
              href="https://linkedin.com/in/yanicells"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/yanicells
            </a>
          </div>
          <div style={{ marginTop: 14, opacity: 0.7 }}>
            © 2026 — Built during{" "}
            <strong
              style={{
                color: "var(--ink-soft)",
                letterSpacing: "0.04em",
              }}
            >
              ESKWELABS
            </strong>{" "}
            Innovation Fellowship · Cohort 9.
          </div>
        </div>
      </div>
    </footer>
  );
}
