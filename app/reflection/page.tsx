export default function ReflectionPage() {
  return (
    <div className="flex flex-col gap-16">
      <article className="flex flex-col gap-8">
        <header className="flex flex-col gap-2">
          <h1 className="text-4xl font-semibold tracking-tight">
            What I learned
          </h1>
        </header>

        <section className="flex flex-col gap-4 leading-relaxed">
          <p>The two biggest things I came out of EIF with:</p>
          <p>
            Prompt engineering is way harder than I thought. Coming in, I
            figured &ldquo;good prompt, good output.&rdquo; That&apos;s not
            how it works in production. It&apos;s an iterative loop of
            constraints, structured outputs, fallbacks, and guardrails. Every
            output you don&apos;t want is a tendency you have to push back
            against, sometimes one prompt revision at a time. The Slide Deck
            Generator&apos;s anti-generic logic and the Thought Leader
            Drafter&apos;s full-text style injection both came from the same
            realization. You don&apos;t tell AI what you want. You build a
            system that makes it hard for AI to give you what you don&apos;t
            want.
          </p>
          <p>
            The other one is that production AI is a different beast from
            school projects. School AI projects can be brilliant in a demo
            and fall apart in week two. The EIF projects had real users,
            real stakeholders (the CEO, the LXDs), and real expectations.
            Stuff had to keep working. I had to think about edge cases,
            error handling, failure modes, and what happens when an LLM call
            times out at 2am. None of that is novel as a concept, but
            actually doing it for the first time is what makes it click.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight">
            What was hard
          </h2>
          <p className="leading-relaxed">
            The hardest part was inheriting other people&apos;s codebases.
            Both projects came with a Phase 1 baseline that I had to read,
            understand, and then push forward. There&apos;s a specific kind
            of discomfort to being three days into a project and still not
            fully sure why the original architect made some of the choices
            they did. I got better at it. Reading code became less about
            &ldquo;what does this do&rdquo; and more about &ldquo;what was
            this trying to solve, and is that still the right problem.&rdquo;
          </p>
          <p className="leading-relaxed">
            The other hard parts: the gap between &ldquo;AI demo works&rdquo;
            and &ldquo;AI works reliably for users&rdquo; is wider than I
            expected. And juggling EIF with school, orgs, freelance work, and
            other internships meant I was always one schedule conflict away
            from something slipping.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight">
            What I&apos;m proud of
          </h2>
          <p className="leading-relaxed">
            Three things, all genuine wins.
          </p>
          <p className="leading-relaxed">
            The prompt engineering depth I picked up. I went from writing
            prompts to thinking in terms of constraints, structured outputs,
            and fallback chains. That&apos;s a real skill and I didn&apos;t
            have it four months ago.
          </p>
          <p className="leading-relaxed">
            The full-stack range. Backend Python, frontend React, AI
            integration, all in one sprint, and shipping. Most of my prior
            projects have been one stack at a time. EIF forced me to be
            useful across the whole thing.
          </p>
          <p className="leading-relaxed">
            The A/B comparison hack on Thought Leader Drafter. Single LLM
            call, two delimited variants, parsed on the backend. Saved cost,
            saved latency, made the value of the writing samples visible. It
            was a clever solution to a real problem and it worked.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight">
            What I&apos;d do differently
          </h2>
          <p className="leading-relaxed">
            Push back more on architecture decisions instead of just
            inheriting. When I joined Phase 2 of both projects, I read the
            existing code, accepted the structure, and built on top of it.
            There were a few choices I should have questioned earlier instead
            of going along with them.
          </p>
          <p className="leading-relaxed">
            Get closer to the users sooner. I worked with stakeholders fine,
            but I didn&apos;t sit with actual LXDs while they used the deck
            generator, and I didn&apos;t watch the CEO actually try to draft
            an article in the Thought Leader Drafter. That kind of feedback
            is irreplaceable and I should have prioritized it.
          </p>
          <p className="leading-relaxed">
            Manage time better. Finals plus EIF plus orgs plus other work was
            rough. Some of that was unavoidable but some of it was on me for
            not setting tighter boundaries earlier.
          </p>
        </section>
      </article>

      <article className="flex flex-col gap-6">
        <header className="flex flex-col gap-2">
          <h1 className="text-4xl font-semibold tracking-tight">
            What&apos;s next
          </h1>
        </header>

        <section className="flex flex-col gap-4 leading-relaxed">
          <p>
            I&apos;m looking for software engineering internships. Open to
            full-stack roles with AI components, AI/ML focused product roles,
            or anything where the AI work is real instead of decorative.
            I&apos;d rather build a tool that ten people use every day than
            ship a flashy demo that gets forgotten.
          </p>
          <p>A few directions I&apos;m interested in:</p>
          <ul className="list-disc pl-6 flex flex-col gap-2">
            <li>
              AI products that actually work. Production-grade, reliable, not
              gimmicky.
            </li>
            <li>
              The intersection of AI and UX. Most AI tools are technically
              impressive and miserable to use. There&apos;s a lot of room
              there.
            </li>
            <li>
              Going deeper on AI/ML systems beyond prompt engineering. I want
              to understand the layer below the API.
            </li>
          </ul>
          <p>
            But fundamentally I just want to keep shipping things. AI or
            otherwise. The best version of the next year for me looks like
            more projects with real users, more time spent on the parts of
            building that I haven&apos;t done yet, and less time on stuff
            I&apos;ve already proven I can do.
          </p>
        </section>
      </article>
    </div>
  );
}
