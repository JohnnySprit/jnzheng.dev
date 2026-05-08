import { Navbar } from "@/components/layout/NavBar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section id="about" className="mx-auto max-w-4xl px-6 pb-24 pt-28">
        <h1 className="mb-4 text-4xl font-semibold">about</h1>
        <p className="text-[var(--text-secondary)]">
          About me.
        </p>
      </section>

      <section id="skills" className="mx-auto max-w-4xl px-6 py-24">
        <h2 className="mb-4 text-3xl font-semibold">skills</h2>
        <p className="text-[var(--text-secondary)]">
          My skills.
        </p>
      </section>

      <section id="projects" className="mx-auto max-w-4xl px-6 py-24">
        <h2 className="mb-4 text-3xl font-semibold">projects</h2>
        <p className="text-[var(--text-secondary)]">
          My Projects.
        </p>
      </section>

      <section id="interests" className="mx-auto max-w-4xl px-6 py-24">
        <h2 className="mb-4 text-3xl font-semibold">interests</h2>
        <p className="text-[var(--text-secondary)]">
          My interests.
        </p>
      </section>
    </main>
  );
}