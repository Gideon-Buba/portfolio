import { ArrowUpRight } from "lucide-react"
import { SiGithub } from "react-icons/si"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { projects } from "@/data/projects"
import { createBouncyText } from "../utils/bouncyText"
import { cn } from "@/lib/utils"

export default function Projects() {
  return (
    <div className="w-full">

      {/* ── Header ───────────────────────────────────────────── */}
      <div className="mb-16">
        <p className="mb-3 text-sm text-muted-foreground">
          Let's get right into it!
        </p>
        <h2 className="font-heading leading-none text-foreground
                       text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
          {createBouncyText("FEATURED")}
          <br />
          {createBouncyText("PROJECTS")}
        </h2>
      </div>

      {/* ── Project cards ────────────────────────────────────── */}
      <div className="flex flex-col gap-6">
        {projects.map((project, index) => (
          <Card key={project.id} className="p-0 overflow-hidden">
            <div
              className={cn(
                "flex flex-col md:flex-row",
                index % 2 !== 0 && "md:flex-row-reverse"
              )}
            >
              {/* Thumbnail */}
              <div className="h-[220px] shrink-0 overflow-hidden bg-secondary
                              md:h-auto md:w-[42%] flex items-center justify-center">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Details */}
              <div className="flex flex-1 flex-col gap-5 p-6 md:p-8">

                {/* Index + tags row */}
                <div className="flex items-start justify-between gap-3">
                  <span className="font-heading text-5xl leading-none text-muted-foreground/20 select-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-wrap justify-end gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold leading-snug md:text-2xl">
                  {project.title}
                </h3>

                {/* Description bullets */}
                <ul className="flex flex-col gap-2">
                  {project.description.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground/40" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Project info grid */}
                <Separator />
                <div className="grid grid-cols-[70px_1fr] gap-x-4 gap-y-2 text-sm">
                  <span className="text-muted-foreground">Client</span>
                  <span>{project.client}</span>
                  <span className="text-muted-foreground">Period</span>
                  <span>{project.period}</span>
                  <span className="text-muted-foreground">Role</span>
                  <span>{project.role}</span>
                </div>

                {/* Links */}
                <div className="mt-auto flex items-center gap-6 pt-1">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/live inline-flex items-center gap-1.5 text-sm font-semibold
                               text-primary transition-all hover:gap-2.5"
                  >
                    View Live Site
                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover/live:translate-x-0.5
                                 group-hover/live:-translate-y-0.5"
                    />
                  </a>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium
                                 text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <SiGithub size={14} />
                      GitHub
                    </a>
                  )}
                </div>

              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
