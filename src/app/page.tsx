import Link from "next/link";
import { Navbar } from "@/components/layout/NavBar";
import { Analytics } from "@vercel/analytics/next";
import { PROJECTS } from "@/data/projects";
import { SKILLS } from "@/data/skills";

const sectionClass = "py-12 sm:py-16";
const headingClass = "mb-6 text-2xl font-semibold sm:text-3xl";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center py-12 px-4 sm:px-6">
      <Analytics />
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-[120px_1fr_120px] md:gap-12">
        <Navbar />
        <div className="min-w-0 text-base leading-relaxed">

          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-3xl font-bold hover:opacity-60">johnny zheng</h1>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/in/jnzheng"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[var(--text-secondary)] transition-colors duration-200 hover:opacity-60"
              >
                <svg width="25" height="25" fill="currentColor">
                  <path
                    transform="scale(1.5)"
                    d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                  />
                </svg>
              </a>
              <a
                href="https://github.com/JohnnySprit"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-[var(--text-secondary)] transition-colors duration-200 hover:opacity-60"
              >
                <svg width="25" height="25" fill="currentColor">
                  <path
                    transform="scale(1.5)"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                  />
                </svg>
              </a>
            </div>
          </div>


          <div className="grid gap-6 max-w-[720px]">
            <h2>i'm a student at <span className="iu">indiana university</span></h2>
            <p className="text-[var(--text-secondary)]">
              Hi, I&apos;m Johnny. I&apos;m a senior computer science student at
              Indiana University - Bloomington with specializations in Software
              Engineering and AI. I am also pursuing minors in Data Science and
              Informatics to further develop my skills in data and software
              development.
            </p>
            <p className="text-[var(--text-secondary)]">
              When not working on new projects or studying, I love to boulder at
              Hoosier Heights, listen to music, play video games, and check out
              consumer electronics. I have also been heavily involved in music and
              the marching arts, performing with groups such as the Boston
              Crusaders, the Cavaliers, and the Memphis Youth Symphony Program.
            </p>
          </div>

          <section id="work" className={sectionClass}>
            <h2 className={headingClass}>work</h2>
            <p className="text-[var(--text-muted)]">
              work.
            </p>
          </section>

          <section id="projects" className={sectionClass}>
            <h2 className={headingClass}>projects</h2>
            <div className="space-y-5">
              {PROJECTS.map((project) => (
                <article
                  key={project.title}
                  className="rounded-xl border border-[var(--border)] bg-[var(--bg-tertiary)] p-5 transition-colors duration-200 hover:opacity-80 sm:p-8"
                >
                  <div className="mb-2 flex flex-wrap items-start justify-between gap-2 sm:gap-4">
                    <h3 className="text-lg font-medium sm:text-xl">{project.title}</h3>
                    {project.linkLabel &&
                      (project.external ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--text-muted)] transition-colors duration-200 hover:opacity-60"
                        >
                          {project.linkLabel}
                        </a>
                      ) : (
                        <Link
                          href={project.link}
                          className="shrink-0 rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--text-muted)] transition-colors duration-200 hover:opacity-60"
                        >
                          {project.linkLabel}
                        </Link>
                      ))}
                  </div>
                  <p className="mb-4 text-[var(--text-secondary)]">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-[var(--border)] bg-[var(--bg-secondary)] px-2 py-1 text-xs text-[var(--text-secondary)] hover:opacity-60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>skills</h2>
            <div className="flex flex-wrap gap-3">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[var(--border)] bg-[var(--bg-tertiary)] px-3 py-1 text-sm transition-colors duration-200 hover:opacity-60"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section id="interests" className={sectionClass}>
            <h2 className={headingClass}>interests</h2>
            <p className="text-[var(--text-muted)]">
              interests.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
