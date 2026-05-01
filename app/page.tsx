import Link from "next/link";
import { Screenshot } from "./components/Placeholder";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <section className="flex flex-col gap-6">
        <header className="flex flex-col gap-2">
          <h1 className="text-4xl font-semibold tracking-tight">
            Yani (Edrian Miguel Capistrano)
          </h1>
          <p className="text-lg text-zinc-600">
            Builder, full-stack dev, EIF Cohort 9 Fellow.
          </p>
        </header>

        <div className="flex flex-col gap-4 text-base leading-relaxed">
          <p>
            I build things. Mostly web apps, lately with a lot of AI under the
            hood. Stuff like UniSort (a university recommender that&apos;s
            pulled in 35,000+ visitors), AGILA (a campus cat management app),
            and Benkyou (a Japanese study PWA I made because I was getting
            tired of Anki).
          </p>
          <p>
            I&apos;m also a 2nd-year Computer Science student at Ateneo de
            Manila, going into 3rd year this June, specializing in Data
            Science and Analytics. I&apos;ll be honest, EIF was my first real
            internship-type thing. School projects are one thing. Building
            something that an actual CEO is going to test against his own
            writing is another. I came in still figuring a lot of stuff out,
            and I&apos;m leaving with a much clearer sense of what production
            AI work actually looks like.
          </p>
          <p>
            On the side, I&apos;m a Developer at CompSAt and a Back-end
            Developer at GDGoC-Loyola. Outside of code, photography and
            badminton.
          </p>
        </div>

        <Screenshot label="REPLACE WITH PROFILE PHOTO" width={400} height={400} />
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-semibold tracking-tight">
          What I did at Eskwelabs
        </h2>
        <div className="flex flex-col gap-4 text-base leading-relaxed">
          <p>
            I was part of Cohort 9 of the Eskwelabs Innovation Fellowship, AI
            Solution Development track. I joined because I wanted real AI and
            product experience outside of school. Not another class project
            that lives and dies on a single grade. Something that ships, with
            stakeholders, with users.
          </p>
          <p>
            I worked on two projects during the fellowship. Different
            surfaces, same idea: AI tools built for actual Eskwelabs internal
            use. The Slide Deck Generator helps Learning Experience Designers
            build instructor decks faster. The Thought Leader Drafter helps
            the CEO write articles in his own voice. Different problems, but
            both are about taking the parts of someone&apos;s job that drain
            hours and seeing how far AI can take them, without producing the
            kind of generic output that AI tools usually spit out.
          </p>
          <p>
            The biggest gap between this and school was the production-ready
            bar. School projects can be impressive in a demo and fall apart
            five minutes later. These tools needed to hold up. They needed to
            handle weird inputs, fail gracefully, and give outputs that
            someone would actually use, not just clap at.
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            href="/projects/slide-deck-generator"
            className="border border-zinc-300 p-6 hover:border-zinc-900 transition-colors flex flex-col gap-2"
          >
            <h3 className="text-lg font-semibold">
              Instructor Sprint Lecture Materials Generator
            </h3>
            <p className="text-sm text-zinc-600">
              Turns Eskwelabs Class PRDs into ready-to-use Google Slides decks
              with speaker notes.
            </p>
          </Link>
          <Link
            href="/projects/thought-leader-drafter"
            className="border border-zinc-300 p-6 hover:border-zinc-900 transition-colors flex flex-col gap-2"
          >
            <h3 className="text-lg font-semibold">Thought Leader Drafter</h3>
            <p className="text-sm text-zinc-600">
              Generates long-form articles in a specific author&apos;s voice
              using their own writing as style references.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
