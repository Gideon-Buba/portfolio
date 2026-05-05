import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { Sun, Moon, Menu } from "lucide-react"
import { SiLinkedin, SiGithub } from "react-icons/si"
import { motion, useScroll, useSpring } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useTheme } from "@/lib/theme"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
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

function navLinkClass({ isActive }: { isActive: boolean }) {
  return cn(
    "text-sm font-medium px-5 py-2 rounded-full transition-all duration-200",
    isActive
      ? "bg-primary text-primary-foreground"
      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
  )
}

export default function NavBar() {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
    >
      {/* Scroll progress bar */}
      <motion.span
        className="absolute bottom-0 left-0 h-px w-full bg-primary origin-left"
        style={{ scaleX }}
      />

      <div className="max-w-[90%] mx-auto flex items-center justify-between h-20">

        {/* ── Logo ──────────────────────────────────────────── */}
        <NavLink
          to="/"
          className="font-heading text-[2.2rem] leading-none tracking-wider text-foreground hover:text-primary transition-colors duration-200"
        >
          GIDEON
        </NavLink>

        {/* ── Desktop pill nav ──────────────────────────────── */}
        <nav className="hidden md:flex items-center gap-1 bg-card/80 backdrop-blur-sm border border-border rounded-full px-2 py-1.5">
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink key={to} to={to} className={navLinkClass}>
              {label}
            </NavLink>
          ))}
        </nav>

        {/* ── Right side ────────────────────────────────────── */}
        <div className="flex items-center gap-1">

          {/* Social icons — desktop only */}
          <div className="hidden md:flex items-center gap-1">
            {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="size-8 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>

          {/* Theme toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="text-muted-foreground hover:text-foreground"
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </Button>

          {/* Mobile menu ────────────────────────────────────── */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden text-muted-foreground hover:text-foreground"
                  aria-label="Open menu"
                />
              }
            >
              <Menu size={20} />
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[280px] bg-card border-border flex flex-col p-0"
            >
              <SheetHeader className="p-6 pb-0">
                <SheetTitle className="font-heading text-2xl tracking-wider">
                  GIDEON
                </SheetTitle>
              </SheetHeader>

              {/* Nav links */}
              <nav className="flex flex-col gap-1 px-4 pt-6">
                {NAV_LINKS.map(({ label, to }) => (
                  <NavLink
                    key={to}
                    to={to}
                    className={navLinkClass}
                    onClick={() => setMobileOpen(false)}
                  >
                    {label}
                  </NavLink>
                ))}
              </nav>

              {/* Social links at bottom */}
              <div className="mt-auto p-6 pt-4 border-t border-border flex items-center gap-4">
                {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  )
}
