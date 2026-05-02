import Link from "next/link";
import PageHeader from "../../components/PageHeader";
import SectionMark from "../../components/SectionMark";
import ReflectionCard from "../../components/ReflectionCard";

export default function ReflectionPage() {
  return (
    <>
      <PageHeader
        kicker="Reflection · EIF Cohort 9"
        title="What I learned"
        lede="The two biggest things I came out of EIF with."
      />

      {/* WHAT I LEARNED */}
      <section style={{ padding: "20px 0 80px" }}>
        <div className="container">
          <div className="grid-rail">
            <div>
              <SectionMark num="01" label="What I learned" />
            </div>
            <div className="prose">
              <p>
                Prompt engineering is way harder than I thought. Coming in, I
                figured &ldquo;good prompt, good output.&rdquo; That&apos;s
                not how it works in production. It&apos;s an iterative loop
                of constraints, structured outputs, fallbacks, and guardrails.
                Every output you don&apos;t want is a tendency you have to
                push back against, sometimes one prompt revision at a time.
                The Slide Deck Generator&apos;s anti-generic logic and the
                Thought Leader Drafter&apos;s full-text style injection both
                came from the same realization.
              </p>

              <blockquote
                style={{
                  margin: "32px 0",
                  padding: "24px 28px",
                  borderLeft: "3px solid var(--accent)",
                  background: "var(--bg-soft)",
                  fontFamily: "var(--serif)",
                  fontSize: 22,
                  lineHeight: 1.4,
                  letterSpacing: "-0.01em",
                  color: "var(--ink)",
                }}
              >
                You don&apos;t tell AI what you want. You build a system that
                makes it hard for AI to give you what you don&apos;t want.
              </blockquote>

              <p>
                The other one is that production AI is a different beast from
                school projects. School AI projects can be brilliant in a demo
                and fall apart in week two. The EIF projects had real users,
                real stakeholders (the CEO, the LXDs), and real expectations.
                Stuff had to keep working. I had to think about edge cases,
                error handling, failure modes, and what happens when an LLM
                call times out at 2am. None of that is novel as a concept, but
                actually doing it for the first time is what makes it click.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HARD / PROUD / DIFFERENT */}
      <section
        style={{
          padding: "60px 0",
          background: "var(--bg-soft)",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div className="container">
          <SectionMark num="02" label="The honest part" />
          <div
            className="grid-3"
            style={{
              marginTop: 40,
              gap: 0,
              borderTop: "1px solid var(--line)",
              borderLeft: "1px solid var(--line)",
            }}
          >
            <ReflectionCard
              kicker="What was hard"
              body={[
                "The hardest part was inheriting other people's codebases. Both projects came with a Phase 1 baseline that I had to read, understand, and then push forward. There's a specific kind of discomfort to being three days into a project and still not fully sure why the original architect made some of the choices they did. I got better at it. Reading code became less about \"what does this do\" and more about \"what was this trying to solve, and is that still the right problem.\"",
                "The other hard parts: the gap between \"AI demo works\" and \"AI works reliably for users\" is wider than I expected. And juggling EIF with school, orgs, freelance work, and other internships meant I was always one schedule conflict away from something slipping.",
              ]}
            />
            <ReflectionCard
              kicker="What I'm proud of"
              body={[
                "Three things, all genuine wins.",
                "The prompt engineering depth I picked up. I went from writing prompts to thinking in terms of constraints, structured outputs, and fallback chains. That's a real skill and I didn't have it four months ago.",
                "The full-stack range. Backend Python, frontend React, AI integration, all in one sprint, and shipping. Most of my prior projects have been one stack at a time. EIF forced me to be useful across the whole thing.",
                "The A/B comparison hack on Thought Leader Drafter. Single LLM call, two delimited variants, parsed on the backend. Saved cost, saved latency, made the value of the writing samples visible.",
              ]}
            />
            <ReflectionCard
              kicker="What I'd do differently"
              body={[
                "Push back more on architecture decisions instead of just inheriting. When I joined Phase 2 of both projects, I read the existing code, accepted the structure, and built on top of it. There were a few choices I should have questioned earlier instead of going along with them.",
                "Get closer to the users sooner. I worked with stakeholders fine, but I didn't sit with actual LXDs while they used the deck generator, and I didn't watch the CEO actually try to draft an article in the Thought Leader Drafter. That kind of feedback is irreplaceable and I should have prioritized it.",
                "Manage time better. Finals plus EIF plus orgs plus other work was rough. Some of that was unavoidable but some of it was on me for not setting tighter boundaries earlier.",
              ]}
            />
          </div>
        </div>
      </section>

      {/* WHAT'S NEXT */}
      <section style={{ padding: "100px 0 80px" }}>
        <div className="container">
          <div className="grid-rail">
            <div>
              <SectionMark num="03" label="What's next" />
            </div>
            <div className="prose">
              <h2
                className="serif"
                style={{
                  fontSize: 56,
                  lineHeight: 1,
                  letterSpacing: "-0.025em",
                  marginBottom: 32,
                }}
              >
                What&apos;s next
              </h2>
              <p>
                I&apos;m looking for software engineering internships. Open to
                full-stack roles with AI components, AI/ML focused product
                roles, or anything where the AI work is real instead of
                decorative. I&apos;d rather build a tool that ten people use
                every day than ship a flashy demo that gets forgotten.
              </p>
              <p>A few directions I&apos;m interested in:</p>

              <div style={{ marginTop: 24 }}>
                {[
                  {
                    num: "01",
                    title: "AI products that actually work",
                    body: "Production-grade, reliable, not gimmicky.",
                  },
                  {
                    num: "02",
                    title: "The intersection of AI and UX",
                    body: "Most AI tools are technically impressive and miserable to use. There's a lot of room there.",
                  },
                  {
                    num: "03",
                    title:
                      "Going deeper on AI/ML systems beyond prompt engineering",
                    body: "I want to understand the layer below the API.",
                  },
                ].map((d, i) => (
                  <div
                    key={d.num}
                    style={{
                      padding: "24px 0",
                      borderTop: i === 0 ? "1px solid var(--line)" : "none",
                      borderBottom: "1px solid var(--line)",
                      display: "grid",
                      gridTemplateColumns: "60px 1fr",
                      gap: 24,
                    }}
                  >
                    <div
                      className="mono"
                      style={{ color: "var(--accent)", fontSize: 13 }}
                    >
                      {d.num}
                    </div>
                    <div>
                      <div
                        className="serif"
                        style={{
                          fontSize: 22,
                          color: "var(--ink)",
                          marginBottom: 6,
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {d.title}
                      </div>
                      <div
                        style={{
                          fontSize: 15,
                          color: "var(--ink-soft)",
                          lineHeight: 1.6,
                        }}
                      >
                        {d.body}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <p
                style={{
                  marginTop: 40,
                  fontFamily: "var(--serif)",
                  fontSize: 22,
                  lineHeight: 1.45,
                  color: "var(--ink)",
                  letterSpacing: "-0.01em",
                }}
              >
                But fundamentally I just want to keep shipping things. AI or
                otherwise. The best version of the next year for me looks like
                more projects with real users, more time spent on the parts of
                building that I haven&apos;t done yet, and less time on stuff
                I&apos;ve already proven I can do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{ padding: "60px 0 120px", borderTop: "1px solid var(--line)" }}
      >
        <div className="container">
          <div className="grid-2" style={{ alignItems: "center", gap: 48 }}>
            <h3
              className="serif"
              style={{
                fontSize: 56,
                lineHeight: 0.98,
                letterSpacing: "-0.025em",
              }}
            >
              Want to talk?
            </h3>
            <div>
              <p
                style={{
                  fontSize: 17,
                  color: "var(--ink-soft)",
                  marginBottom: 20,
                }}
              >
                The easiest ways to reach me are on the contact page.
              </p>
              <Link href="/contact" className="cta">
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
