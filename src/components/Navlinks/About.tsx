import { SiLinkedin, SiGithub } from "react-icons/si"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { languages, frameworks, education } from "@/data/skills"
import { experiences } from "@/data/experience"
import { cn } from "@/lib/utils"

const SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com/in/gideon-buba-34aaa2190/",
    icon: SiLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/Gideon-Buba",
    icon: SiGithub,
    label: "GitHub",
  },
]

/* ── Reusable two-column section row ──────────────────────────── */
function SectionRow({
  title,
  children,
  className,
}: {
  title: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "grid gap-8 py-16 md:grid-cols-[220px_1fr] md:gap-16 lg:grid-cols-[280px_1fr]",
        className
      )}
    >
      <h2 className="font-heading text-7xl leading-none text-foreground md:text-8xl">
        {title}
      </h2>
      <div className="flex flex-col justify-center">{children}</div>
    </div>
  )
}

/* ── Skill pill ───────────────────────────────────────────────── */
function SkillBadge({ label }: { label: string }) {
  return (
    <Badge
      variant="outline"
      className="h-auto cursor-default rounded-full px-4 py-1.5 text-sm font-medium
                 transition-all duration-200
                 hover:border-primary hover:bg-primary hover:text-primary-foreground"
    >
      {label}
    </Badge>
  )
}

/* ── Main component ───────────────────────────────────────────── */
export default function About() {
  return (
    <div className="w-full text-foreground">

      {/* ── Intro ─────────────────────────────────────────── */}
      <SectionRow title="ABOUT ME">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <p className="text-2xl font-medium leading-snug md:text-3xl">
              Web developer based in{" "}
              <span className="text-primary">Abuja</span>, with a background
              in <span className="text-primary">Computer Science</span>.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              I build high-quality web applications with React, TypeScript,
              and Node.js. Skilled in teamwork, agile workflows, and
              delivering solutions that balance clean code with great UX.
            </p>
          </div>

          {/* Resume + socials */}
          <div className="flex flex-wrap items-center gap-3">
            <Button
              className="rounded-full h-11 gap-2 px-6 font-semibold text-sm"
              render={
                <a href="/dummy.pdf" download="Gideon_Buba_Resume.pdf" />
              }
            >
              <Download size={15} />
              Download Resume
            </Button>

            {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="size-10 flex items-center justify-center rounded-full border border-border
                           text-muted-foreground transition-all duration-200
                           hover:border-primary hover:text-primary"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>
      </SectionRow>

      <Separator />

      {/* ── Education ─────────────────────────────────────── */}
      <SectionRow title="EDUCATION">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-2xl font-semibold md:text-3xl">
              {education.institution.toUpperCase()}
            </p>
            <span className="text-sm text-muted-foreground">
              {education.graduated}
            </span>
          </div>

          <p className="font-medium text-primary">{education.degree}</p>

          <div className="flex flex-wrap gap-2 pt-1">
            {education.coursework.map((course) => (
              <Badge key={course} variant="secondary" className="text-xs">
                {course}
              </Badge>
            ))}
          </div>
        </div>
      </SectionRow>

      <Separator />

      {/* ── Skills ────────────────────────────────────────── */}
      <SectionRow title="SKILLS">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Languages
            </p>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <SkillBadge key={lang} label={lang} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Frameworks &amp; Libraries
            </p>
            <div className="flex flex-wrap gap-2">
              {frameworks.map((fw) => (
                <SkillBadge key={fw} label={fw} />
              ))}
            </div>
          </div>
        </div>
      </SectionRow>

      <Separator className="mt-8" />

      {/* ── Experience ────────────────────────────────────── */}
      <SectionRow title="EXPERIENCE" className="pt-20">
        <div className="flex flex-col gap-10">
          {experiences.map((exp) => (
            <div key={exp.company} className="relative border-l border-border pl-6">
              {/* Timeline dot */}
              <span className="absolute -left-[5px] top-1.5 size-2.5 rounded-full bg-primary" />

              {/* Header row */}
              <div className="flex flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-lg font-semibold">
                  {exp.title}
                  <span className="ml-2 text-sm font-normal text-muted-foreground">
                    · {exp.type}
                  </span>
                </p>
                <span className="text-sm text-muted-foreground">{exp.period}</span>
              </div>

              {/* Company */}
              <p className="mt-0.5 text-sm font-medium text-primary">
                {exp.company}
              </p>

              {/* Responsibilities */}
              <ul className="mt-3 flex flex-col gap-1.5">
                {exp.responsibilities.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-1.5 size-1 shrink-0 rounded-full bg-muted-foreground/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionRow>

    </div>
  )
}
