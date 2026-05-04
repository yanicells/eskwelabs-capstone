import ProjectHero from "../../../components/ProjectHero";
import ProjectSection from "../../../components/ProjectSection";
import ContributionBlock from "../../../components/ContributionBlock";
import PipelineSteps from "../../../components/PipelineSteps";
import NextProject from "../../../components/NextProject";
import { FeatureScreenshot } from "../../../components/FramedPlaceholder";

export default function SlideDeckGeneratorPage() {
  return (
    <>
      <ProjectHero
        num="Project 02"
        name="Instructor Lecture Materials Generator"
        oneLine="Turns Eskwelabs Class PRDs into ready-to-use Google Slides decks with speaker notes."
        stack={[
          "Next.js 14",
          "FastAPI",
          "Python",
          "LangChain",
          "OpenAI",
          "Anthropic",
          "Google Slides API",
          "Google Drive API",
          "Google Sheets API",
          "Supabase",
        ]}
        role="AI Solution Dev"
        year="2026 · v1.1"
        status="Internal"
        links={[
          {
            href: "https://eskwelabs-instructor-slides.vercel.app",
            label: "Live app",
            icon: "live",
          },
          {
            href: "https://github.com/aremis9/esk-lecture-materials-gen/",
            label: "GitHub",
            icon: "github",
          },
        ]}
      />

      <section style={{ padding: "0 0 60px" }}>
        <div className="container wide">
          <FeatureScreenshot
            url="eskwelabs-instructor-slides.vercel.app"
            label="Slide deck generator — main dashboard"
            src="/projects/slides-gen-page.png"
            alt="Slide deck generator main dashboard"
            ratio="16/9"
          />
        </div>
      </section>

      <ProjectSection num="01" label="Problem" anchor="problem">
        <p>
          Learning Experience Designers at Eskwelabs were spending 24+ hours
          building decks for every 16-hour sprint. The v1 prototype already
          proved the bones of an AI pipeline could work. It cut the time down
          to about 48 minutes. The catch was content quality. The decks ran,
          but they leaned generic, missed speaker notes entirely, and
          overflowed text boxes regularly.
        </p>
        <p>
          My sprint was v1.1. The job was to take what was working and push it
          the rest of the way to something LXDs would actually trust enough to
          use as a starting point, hitting the target of under 2 hours total
          review time.
        </p>
      </ProjectSection>

      <ProjectSection num="02" label="What it does">
        <p>
          The tool takes a validated Class PRD (PDF or markdown) and produces
          a complete Google Slides deck. The pipeline:
        </p>

        <PipelineSteps
          steps={[
            { title: "PRD parsed and structured", body: "PRD gets parsed and structured." },
            {
              title: "Storyboard",
              body: "An LLM generates a storyboard — sessions, slide types, slide order, timing.",
            },
            {
              title: "Validate storyboard",
              body: "A validator checks the storyboard for issues and corrects them.",
            },
            {
              title: "Populate slides",
              body: "The slides get populated, one batch per session.",
            },
            {
              title: "Quality check",
              body: "A quality checker scans for generic content and flags anything that needs regenerating.",
            },
            {
              title: "Assemble in Slides",
              body: "The Google Slides API assembles the final deck from a master template.",
            },
            {
              title: "Speaker notes",
              body: "Speaker notes get written in first-person instructor voice for each slide.",
            },
          ]}
        />

        <p>
          The user gets a Google Slides link at the end, plus a dashboard to
          track generation history, costs, and deck previews.
        </p>
      </ProjectSection>

      <section style={{ padding: "0 0 40px" }}>
        <div className="container wide">
          <div className="grid-2" style={{ gap: 28 }}>
            <FeatureScreenshot
              url="eskwelabs-instructor-slides.vercel.app/history"
              label="Generation history"
              src="/projects/slides-gen-history-page.png"
              alt="Generation history and past runs"
              caption="Fig. 1 — Generation history"
            />
            <FeatureScreenshot
              url="eskwelabs-instructor-slides.vercel.app/notes"
              label="Speaker notes view"
              src="/projects/slides-gen-notes-page.png"
              alt="Speaker notes editing and preview"
              caption="Fig. 2 — Speaker notes"
            />
          </div>
        </div>
      </section>

      <ProjectSection num="03" label="My contributions" accent>
        <p>I focused on the AI side of the system. Three pieces in particular:</p>

        <ContributionBlock idx={1} title="Anti-generic content logic">
          <p>
            The v1 prototype had a habit of producing slides that sounded fine
            but could&apos;ve been about anything. &ldquo;This concept enhances
            learning outcomes&rdquo; type of stuff. I built a content quality
            checker with an expanded keyword filter and a rule the LLM had to
            apply to itself: could this sentence appear in a deck for a
            completely different topic? If yes, regenerate. The point was to
            force specificity into every slide.
          </p>
        </ContributionBlock>

        <ContributionBlock idx={2} title="Character limit enforcement">
          <p>
            The Google Slides API has no auto-fit. If the AI generates a
            200-character bullet point and the placeholder fits 80, the text
            overflows and the deck looks broken. I mapped the backend&apos;s
            prompt constraints directly to the frontend&apos;s UI box limits,
            so the model knew exactly how many characters it had per field.
            Concepts capped at 80, table cells at 60, and so on.
          </p>
        </ContributionBlock>

        <ContributionBlock idx={3} title="Fail-safe speaker notes">
          <p>
            The original pipeline didn&apos;t generate speaker notes at all. I
            added a fallback prompt that runs independently if the main batch
            fails to produce notes, with a 160-character minimum and a
            constraint that they had to be in the instructor&apos;s
            first-person voice. This way the deck never ships without notes.
          </p>
        </ContributionBlock>

        <p
          style={{
            marginTop: 36,
            color: "var(--ink-mute)",
            fontSize: 15,
            paddingLeft: 16,
            borderLeft: "2px solid var(--line)",
          }}
        >
          I also did the unglamorous backend work that made everything more
          stable: refactoring the Google client for proper exception handling,
          pinning fragile dependencies, fixing CORS, and switching all loggers
          to timezone-aware UTC.
        </p>
      </ProjectSection>

      <ProjectSection num="04" label="Why this mattered">
        <p>
          The target was 24+ hours of manual deck work down to under 2 hours
          of review. Real LXDs at Eskwelabs are the users. The tool was
          internal production, not a demo.
        </p>
      </ProjectSection>

      <ProjectSection
        num="05"
        label="What I'd flag as the interesting bit"
      >
        <p>
          Prompt engineering for production AI is harder than people think.
          It&apos;s not &ldquo;write a clever prompt and you&apos;re
          done.&rdquo; It&apos;s writing a prompt, watching it produce
          something subtly wrong on the 47th run, figuring out which
          constraint failed, and adding another guardrail. Fluff and
          hallucination aren&apos;t bugs you fix once. They&apos;re tendencies
          you have to keep pushing back against.
        </p>
      </ProjectSection>

      <ProjectSection num="06" label="Skills shown">
        <p>
          Prompt engineering with structured outputs and constraint
          enforcement, FastAPI backend design, Google Workspace API
          integration, Pydantic validation, async pipeline design, AI quality
          assurance.
        </p>
      </ProjectSection>

      <NextProject
        to="/reflection"
        num="REFLECTION"
        title="What I learned"
        tag="Reflection + What's next."
      />
    </>
  );
}
