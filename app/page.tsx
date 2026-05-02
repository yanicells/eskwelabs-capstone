import Link from "next/link";
import SectionMark from "./components/SectionMark";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        style={{ padding: "96px 0 80px", position: "relative", overflow: "hidden" }}
      >
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 0 }}>
            <div
              className="fade-up"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                marginBottom: 36,
                flexWrap: "wrap",
              }}
            >
              <span className="upcase-mono" style={{ color: "var(--accent)" }}>
                Portfolio · Cohort 9
              </span>
              <span style={{ color: "var(--ink-mute)" }}>—</span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 12px",
                  border: "1px solid var(--line)",
                  borderRadius: 999,
                  background: "var(--bg-card)",
                  fontSize: 12,
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "var(--accent)",
                  }}
                ></span>
                <span style={{ color: "var(--ink-soft)" }}>Built during</span>
                <strong
                  style={{
                    color: "var(--ink)",
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                  }}
                >
                  ESKWELABS
                </strong>
                <span style={{ color: "var(--ink-mute)" }}>
                  · Innovation Fellowship
                </span>
              </span>
            </div>
            <h1
              className="serif fade-up"
              style={{
                fontSize: "clamp(64px, 11vw, 168px)",
                lineHeight: 0.92,
                letterSpacing: "-0.035em",
                marginBottom: 28,
                animationDelay: "60ms",
              }}
            >
              Yani<span style={{ color: "var(--accent)" }}>.</span>
            </h1>
            <p
              className="lede fade-up"
              style={{
                maxWidth: 720,
                color: "var(--ink)",
                animationDelay: "140ms",
              }}
            >
              Builder, full-stack developer, and AI engineer. I make tools
              that real people use — not demos that fall apart in week two.
            </p>
            <div
              className="fade-up"
              style={{
                marginTop: 48,
                display: "flex",
                flexWrap: "wrap",
                gap: 14,
                animationDelay: "220ms",
              }}
            >
              <Link
                href="/projects/slide-deck-generator"
                className="btn btn-primary"
              >
                See the work <span className="btn-arrow"></span>
              </Link>
              <Link href="/contact" className="btn btn-ghost">
                Get in touch
              </Link>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: -40,
            top: 80,
            width: 280,
            height: 280,
            background:
              "radial-gradient(circle at center, var(--accent-soft) 0%, transparent 70%)",
            filter: "blur(12px)",
            opacity: 0.6,
            pointerEvents: "none",
          }}
        ></div>
      </section>

      {/* MARQUEE STRIP */}
      <section
        style={{
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
          background: "var(--bg-soft)",
        }}
      >
        <div
          className="container"
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0 }}
        >
          {[
            { k: "Role", v: "AI Solution Dev Fellow" },
            { k: "Cohort", v: "EIF 9 · 2026" },
            { k: "Projects shipped", v: "2 internal tools" },
            { k: "Stack span", v: "Python · TS · LLMs" },
          ].map((it, i) => (
            <div
              key={it.k}
              style={{
                padding: "22px 24px",
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
      </section>

      {/* ABOUT */}
      <section style={{ padding: "120px 0 80px" }}>
        <div className="container">
          <div className="grid-rail">
            <div>
              <SectionMark num="01" label="About" />
              <div
                className="upcase"
                style={{ color: "var(--ink-mute)", marginTop: 24 }}
              >
                Edrian Miguel Capistrano
              </div>
              <div
                style={{
                  marginTop: 8,
                  fontSize: 14,
                  color: "var(--ink-soft)",
                }}
              >
                Ateneo de Manila · CS
                <br />
                Data Science &amp; Analytics
                <br />
                Manila, PH
              </div>
            </div>
            <div className="prose">
              <p className="lede" style={{ marginBottom: 32 }}>
                I build things. Mostly web apps, lately with a lot of AI under
                the hood.
              </p>
              <p>
                Stuff like <strong>UniSort</strong> (a university recommender
                that&apos;s pulled in 35,000+ visitors), <strong>AGILA</strong>{" "}
                (a campus cat management app), and <strong>Benkyou</strong> (a
                Japanese study PWA I made because I was getting tired of Anki).
              </p>
              <p>
                I&apos;m a 2nd-year Computer Science student at Ateneo de
                Manila, going into 3rd this June, specializing in Data Science
                and Analytics. I&apos;ll be honest — EIF was my first real
                internship-type thing. School projects are one thing. Building
                something that an actual CEO is going to test against his own
                writing is another.
              </p>
              <p>
                On the side I&apos;m a Developer at <strong>CompSAt</strong>{" "}
                and a Back-end Developer at <strong>GDGoC-Loyola</strong>.
                Outside of code, photography and badminton.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EIF JOURNEY */}
      <section style={{ padding: "60px 0 100px" }}>
        <div className="container">
          <div className="grid-rail">
            <div>
              <SectionMark num="02" label="EIF Journey" />
              <div
                style={{
                  marginTop: 24,
                  padding: "16px 18px",
                  background:
                    "linear-gradient(135deg, var(--accent) 0%, oklch(0.42 0.08 200) 100%)",
                  borderRadius: 6,
                  color: "white",
                }}
              >
                <div
                  className="upcase-mono"
                  style={{ fontSize: 10, opacity: 0.85, marginBottom: 6 }}
                >
                  Hosted by
                </div>
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: 18,
                    letterSpacing: "0.04em",
                  }}
                >
                  ESKWELABS
                </div>
                <div style={{ fontSize: 12, opacity: 0.85, marginTop: 4 }}>
                  Innovation Fellowship · Cohort 9
                </div>
              </div>
              <div
                style={{
                  marginTop: 14,
                  fontSize: 13,
                  color: "var(--ink-soft)",
                }}
              >
                AI Solution Development
                <br />
                Track · 2026
              </div>
            </div>
            <div className="prose">
              <h2
                className="serif"
                style={{
                  fontSize: 44,
                  lineHeight: 1.05,
                  marginBottom: 28,
                  letterSpacing: "-0.02em",
                }}
              >
                Two tools. Same idea — push AI past the demo.
              </h2>
              <p>
                I joined Cohort 9 because I wanted real AI and product
                experience outside of school. Not another class project that
                lives and dies on a single grade. Something that ships, with
                stakeholders, with users.
              </p>
              <p>
                I worked on two projects during the fellowship. Different
                surfaces, same idea: AI tools built for actual{" "}
                <strong>internal Eskwelabs use</strong>. The Slide Deck
                Generator helps Learning Experience Designers build instructor
                decks faster. The Thought Leader Drafter helps the CEO write
                articles in his own voice.
              </p>
              <p>
                The biggest gap between this and school was the{" "}
                <em>production-ready bar</em>. School projects can be
                impressive in a demo and fall apart five minutes later. These
                tools needed to hold up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT CARDS */}
      <section style={{ padding: "0 0 120px" }}>
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              marginBottom: 36,
            }}
          >
            <SectionMark num="03" label="Selected work" />
            <span className="upcase-mono" style={{ color: "var(--ink-mute)" }}>
              2026 · 02 projects
            </span>
          </div>

          <div className="grid-2 stagger">
            <ProjectCard
              num="01 / SLIDE DECK GENERATOR"
              title="Turning 24-hour deck builds into 2-hour reviews."
              tag="Internal AI tool for Eskwelabs LXDs · Sprint v1.1"
              stack={[
                "Next.js",
                "FastAPI",
                "LangChain",
                "Google Slides API",
                "Supabase",
              ]}
              ph="01  Pipeline dashboard"
              to="/projects/slide-deck-generator"
            />
            <ProjectCard
              num="02 / THOUGHT LEADER DRAFTER"
              title="Long-form drafts that actually sound like the author."
              tag="Built for the Eskwelabs CEO · Phase 2"
              stack={[
                "Next.js 16",
                "TypeScript",
                "LangChain",
                "shadcn/ui",
                "Supabase",
              ]}
              ph="02  4-stage pipeline"
              to="/projects/thought-leader-drafter"
            />
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section
        style={{
          padding: "80px 0 120px",
          background: "var(--bg-soft)",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div className="narrow" style={{ textAlign: "left" }}>
          <SectionMark num="04" label="Operating principle" />
          <blockquote
            style={{
              margin: "32px 0 0",
              fontFamily: "var(--serif)",
              fontSize: "clamp(28px, 4.2vw, 48px)",
              lineHeight: 1.2,
              letterSpacing: "-0.015em",
              color: "var(--ink)",
            }}
          >
            &ldquo;You don&apos;t tell AI what you want.
            <br />
            You build a system that makes it hard for AI to give you what you{" "}
            <span
              style={{
                color: "var(--accent-ink)",
                borderBottom: "3px solid var(--accent)",
                paddingBottom: 4,
              }}
            >
              don&apos;t
            </span>{" "}
            want.&rdquo;
          </blockquote>
          <div
            className="upcase-mono"
            style={{ marginTop: 24, color: "var(--ink-mute)" }}
          >
            — Lesson from EIF, applied across both projects
          </div>
        </div>
      </section>

      {/* FORWARD CTA */}
      <section style={{ padding: "120px 0 60px" }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: "end", gap: 64 }}>
            <h2
              className="serif"
              style={{
                fontSize: "clamp(44px, 6vw, 80px)",
                lineHeight: 0.98,
                letterSpacing: "-0.025em",
              }}
            >
              Looking for what&apos;s next.
            </h2>
            <div>
              <p
                style={{
                  fontSize: 18,
                  color: "var(--ink-soft)",
                  lineHeight: 1.55,
                  marginBottom: 24,
                }}
              >
                I&apos;m looking for software engineering internships. Open to
                full-stack roles with AI components, AI/ML focused product
                roles, or anything where the AI work is real instead of
                decorative.
              </p>
              <Link href="/reflection" className="btn btn-primary">
                Read the reflection <span className="btn-arrow"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
