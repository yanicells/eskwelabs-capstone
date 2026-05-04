import Link from "next/link";
import SectionMark from "./components/SectionMark";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        style={{ padding: "96px 0 72px", position: "relative", overflow: "hidden" }}
      >
        <div className="container">
          <div
            className="upcase-mono fade-up"
            style={{ color: "var(--accent)", marginBottom: 32 }}
          >
            Portfolio · EIF Cohort 9
          </div>
          <h1
            className="serif fade-up"
            style={{
              fontSize: "clamp(56px, 9vw, 132px)",
              lineHeight: 0.94,
              letterSpacing: "-0.035em",
              marginBottom: 18,
              animationDelay: "60ms",
            }}
          >
            Yani<span style={{ color: "var(--accent)" }}>.</span>
          </h1>
          <div
            className="upcase fade-up"
            style={{
              color: "var(--ink-mute)",
              marginBottom: 32,
              animationDelay: "100ms",
            }}
          >
            Edrian Miguel Capistrano
          </div>
          <p
            className="lede fade-up"
            style={{
              maxWidth: 720,
              color: "var(--ink)",
              animationDelay: "160ms",
            }}
          >
            Builder, full-stack dev, EIF Cohort 9 Fellow.
          </p>
          <div
            className="fade-up"
            style={{
              marginTop: 44,
              display: "flex",
              flexWrap: "wrap",
              gap: 28,
              animationDelay: "240ms",
            }}
          >
            <Link
              href="/projects/thought-leader-drafter"
              className="cta"
            >
              See the projects
            </Link>
            <Link href="/contact" className="cta cta-mute">
              Get in touch
            </Link>
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

      {/* ABOUT */}
      <section style={{ padding: "100px 0 80px" }}>
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
              <p>
                I build things. Mostly web apps, lately with a lot of AI under
                the hood. Stuff like UniSort (a university recommender that&apos;s
                pulled in 35,000+ visitors), AGILA (a campus cat management
                app), and Benkyou (a Japanese study PWA I made because I was
                getting tired of Anki).
              </p>
              <p>
                I&apos;m also a 2nd-year Computer Science student at Ateneo de
                Manila, going into 3rd year this June, specializing in Data
                Science and Analytics. I&apos;ll be honest, EIF was my first
                real internship-type thing. School projects are one thing.
                Building something that an actual CEO is going to test against
                his own writing is another. I came in still figuring a lot of
                stuff out, and I&apos;m leaving with a much clearer sense of
                what production AI work actually looks like.
              </p>
              <p>
                On the side, I&apos;m a Developer at CompSAt and a Back-end
                Developer at GDGoC-Loyola. Outside of code, photography and
                badminton.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT I DID AT ESKWELABS */}
      <section style={{ padding: "60px 0 100px" }}>
        <div className="container">
          <div className="grid-rail">
            <div>
              <SectionMark num="02" label="What I did at Eskwelabs" />
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
                  fontSize: 40,
                  lineHeight: 1.06,
                  marginBottom: 28,
                  letterSpacing: "-0.02em",
                }}
              >
                What I did at Eskwelabs
              </h2>
              <p>
                I was part of Cohort 9 of the Eskwelabs Innovation Fellowship,
                AI Solution Development track. I joined because I wanted real
                AI and product experience outside of school. Not another class
                project that lives and dies on a single grade. Something that
                ships, with stakeholders, with users.
              </p>
              <p>
                I worked on two projects during the fellowship. Different
                surfaces, same idea: AI tools built for actual Eskwelabs
                internal use. The Slide Deck Generator helps Learning
                Experience Designers build instructor decks faster. The Thought
                Leader Drafter helps the CEO write articles in his own voice.
                Different problems, but both are about taking the parts of
                someone&apos;s job that drain hours and seeing how far AI can
                take them, without producing the kind of generic output that AI
                tools usually spit out.
              </p>
              <p>
                The biggest gap between this and school was the
                production-ready bar. School projects can be impressive in a
                demo and fall apart five minutes later. These tools needed to
                hold up. They needed to handle weird inputs, fail gracefully,
                and give outputs that someone would actually use, not just clap
                at.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section style={{ padding: "0 0 120px" }}>
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              marginBottom: 36,
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <SectionMark num="03" label="Projects" />
            <span className="upcase-mono" style={{ color: "var(--ink-mute)" }}>
              2026 · 02 projects
            </span>
          </div>

          <div className="grid-2 stagger">
            <ProjectCard
              num="01 / THOUGHT LEADER DRAFTER"
              title="Thought Leader Drafter"
              tag="Generates long-form articles in a specific author's voice using their own writing as style references."
              stack={[
                "Next.js 16",
                "TypeScript",
                "Tailwind CSS v4",
                "shadcn/ui",
                "Supabase",
                "LangChain",
              ]}
              ph="01  Pipeline UI"
              image="/projects/tld-screen.png"
              alt="Thought Leader Drafter preview"
              to="/projects/thought-leader-drafter"
            />
            <ProjectCard
              num="02 / SLIDE DECK GENERATOR"
              title="Instructor Sprint Lecture Materials Generator"
              tag="Turns Eskwelabs Class PRDs into ready-to-use Google Slides decks with speaker notes."
              stack={[
                "Next.js 14",
                "FastAPI",
                "LangChain",
                "Google Slides API",
                "Supabase",
              ]}
              ph="02  Generation dashboard"
              image="/projects/slides-gen-home-screen.png"
              alt="Slide Deck Generator preview"
              to="/projects/slide-deck-generator"
            />
          </div>
        </div>
      </section>

      {/* OPERATING PRINCIPLE */}
      <section
        style={{
          padding: "80px 0 120px",
          background: "var(--bg-soft)",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div className="narrow">
          <SectionMark num="04" label="Reflection" />
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
            You don&apos;t tell AI what you want. You build a system that makes
            it hard for AI to give you what you{" "}
            <span
              style={{
                color: "var(--accent-ink)",
                borderBottom: "3px solid var(--accent)",
                paddingBottom: 4,
              }}
            >
              don&apos;t
            </span>{" "}
            want.
          </blockquote>
          <div
            className="upcase-mono"
            style={{ marginTop: 24, color: "var(--ink-mute)" }}
          >
            From the reflection page
          </div>
        </div>
      </section>

      {/* WHAT'S NEXT */}
      <section style={{ padding: "100px 0 60px" }}>
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
              What&apos;s next
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
              <Link href="/reflection" className="cta">
                Read the reflection
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
