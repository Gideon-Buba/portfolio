import { NavLink } from "react-router-dom"
import { ArrowUp } from "lucide-react"
import { SiLinkedin, SiGithub } from "react-icons/si"
import { Separator } from "@/components/ui/separator"

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

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

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <div className="w-[90%] mx-auto py-12 md:py-16">

        {/* ── Main row ───────────────────────────────────── */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-[1.8fr_1fr_1fr]">

          {/* Brand */}
          <div className="flex flex-col gap-3">
            <NavLink
              to="/"
              className="w-fit font-heading text-2xl tracking-wider text-foreground
                         transition-colors duration-200 hover:text-primary"
            >
              GIDEON
            </NavLink>
            <p className="max-w-[220px] text-sm leading-relaxed text-muted-foreground">
              Full-stack developer based in Abuja, building high-quality web
              applications.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Navigation
            </p>
            <nav className="flex flex-col gap-2.5">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="w-fit text-sm text-muted-foreground transition-colors
                             duration-200 hover:text-foreground"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Connect
            </p>
            <div className="flex flex-col gap-2.5">
              {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-fit items-center gap-2.5 text-sm text-muted-foreground
                             transition-colors duration-200 hover:text-foreground"
                >
                  <Icon
                    size={14}
                    className="transition-colors duration-200 group-hover:text-primary"
                  />
                  {label}
                </a>
              ))}
            </div>
          </div>

        </div>

        <Separator className="my-8" />

        {/* ── Bottom row ─────────────────────────────────── */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {year} Gideon Buba. Built with React, TypeScript &amp; shadcn/ui.
          </p>
          <a
            href="#home"
            className="group flex items-center gap-1.5 text-xs text-muted-foreground
                       transition-colors duration-200 hover:text-foreground"
          >
            Back to top
            <ArrowUp
              size={12}
              className="transition-transform duration-200 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

      </div>
    </footer>
  )
}
