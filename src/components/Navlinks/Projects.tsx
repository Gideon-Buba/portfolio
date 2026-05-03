import { ArrowUpRight } from "lucide-react"
import { SiGithub } from "react-icons/si"
import { motion, type Variants } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { projects } from "@/data/projects"
import { createBouncyText } from "../utils/bouncyText"
import { fadeUp, stagger } from "@/lib/animations"
import { cn } from "@/lib/utils"

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
}

export default function Projects() {
  return (
    <div className="w-full">
      {/* ── Header ───────────────────────────────────────────── */}
      <motion.div
        className="mb-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={fadeUp}
      >
        <h2
          className="font-heading leading-none text-foreground
                     text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
        >
          {createBouncyText("FEATURED")}
          <br />
          {createBouncyText("PROJECTS")}
        </h2>
      </motion.div>

      {/* ── Project cards ────────────────────────────────────── */}
      <motion.div
        className="flex flex-col gap-6"
        variants={stagger(0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={cardVariant}
            whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
          >
            <Card className="p-0 overflow-hidden transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/5">
              <div
                className={cn(
                  "flex flex-col md:flex-row",
                  index % 2 !== 0 && "md:flex-row-reverse",
                )}
              >
                {/* Thumbnail */}
                <div
                  className="h-[220px] shrink-0 overflow-hidden bg-secondary
                              md:h-auto md:w-[42%] flex items-center justify-center"
                >
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="h-full w-full object-contain transition-transform duration-500 hover:scale-105"
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
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
