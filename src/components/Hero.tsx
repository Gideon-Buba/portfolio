import { SiLinkedin, SiGithub } from "react-icons/si"
import { Button } from "@/components/ui/button"
import { createBouncyText } from "./utils/bouncyText"
import Avatar3D from "./Avatar"
import { About, Contact, Projects } from "./Navlinks"

export default function Hero() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        id="home"
        className="min-h-[100dvh] pt-20 flex items-center"
      >
        <div className="w-full grid md:grid-cols-[1.4fr_1fr] gap-12 items-center py-16">

          {/* Left column */}
          <div className="flex flex-col gap-6">

            {/* Availability badge */}
            <div className="flex items-center gap-2.5 w-fit">
              <span className="size-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">
                Available for new opportunities
              </span>
            </div>

            {/* Name */}
            <div>
              <p className="font-heading leading-none text-muted-foreground/40 select-none
                            text-[2.8rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem]">
                {createBouncyText("hi, i am")}
              </p>
              <h1 className="font-heading leading-[0.92] text-foreground
                             text-[5rem] sm:text-[6.5rem] md:text-[8.5rem] lg:text-[10.5rem]">
                {createBouncyText("GIDEON")}
                <br />
                {createBouncyText("BUBA")}
              </h1>
            </div>

            {/* Bio */}
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-[500px]">
              Full-stack developer based in Abuja. I build high-quality web
              applications with React, TypeScript, and Node.js — focused on
              clean code, great UX, and shipping work that makes an impact.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <Button
                size="lg"
                className="rounded-full px-8 h-12 font-semibold text-sm"
                render={<a href="#contact" />}
              >
                Contact Me
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 h-12 font-semibold text-sm"
                render={<a href="#projects" />}
              >
                View Work
              </Button>

              {/* Mobile social icons */}
              <div className="flex md:hidden items-center gap-4 ml-1">
                <a
                  href="https://www.linkedin.com/in/gideon-buba-34aaa2190/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <SiLinkedin size={20} />
                </a>
                <a
                  href="https://github.com/Gideon-Buba"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <SiGithub size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right column — 3D Avatar */}
          <div className="hidden md:flex items-center justify-center">
            <div className="w-full max-w-[400px] aspect-square">
              <Avatar3D />
            </div>
          </div>

        </div>
      </section>

      {/* ── Projects ─────────────────────────────────────────── */}
      <section id="projects" className="py-24" data-aos="fade-up">
        <Projects />
      </section>

      {/* ── About ────────────────────────────────────────────── */}
      <section id="about" className="py-24" data-aos="fade-up">
        <About />
      </section>

      {/* ── Contact ──────────────────────────────────────────── */}
      <section
        id="contact"
        className="py-24 flex items-center justify-center"
        data-aos="fade-up"
      >
        <Contact />
      </section>
    </>
  )
}
