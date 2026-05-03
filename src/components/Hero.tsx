import { SiLinkedin, SiGithub } from "react-icons/si"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { createBouncyText } from "./utils/bouncyText"
import Avatar3D from "./Avatar"
import { About, Contact, Projects } from "./Navlinks"
import { fadeUp, stagger } from "@/lib/animations"

export default function Hero() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        id="home"
        className="h-[100dvh] pt-20 flex items-center overflow-hidden"
      >
        <div className="w-full grid md:grid-cols-[1.4fr_1fr] gap-8 md:gap-12 items-center">

          {/* Left column — staggered entrance */}
          <motion.div
            className="flex flex-col gap-4"
            variants={stagger(0.13)}
            initial="hidden"
            animate="show"
          >
            {/* Availability badge */}
            <motion.div variants={fadeUp} className="flex items-center gap-2.5 w-fit">
              <span className="size-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">
                Available for new opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.div variants={fadeUp}>
              <p className="font-heading leading-none text-muted-foreground/40 select-none
                            text-[clamp(1.5rem,3.5vh,3.5rem)]">
                {createBouncyText("hi, i am")}
              </p>
              <h1 className="font-heading leading-[0.92] text-foreground
                             text-[clamp(3rem,8.5vh,7.5rem)]">
                {createBouncyText("GIDEON")}
                <br />
                {createBouncyText("BUBA")}
              </h1>
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={fadeUp}
              className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-[480px]"
            >
              Full-stack developer based in Abuja. I build high-quality web
              applications with React, TypeScript, and Node.js — focused on
              clean code, great UX, and shipping things that make an impact.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                <Button
                  size="lg"
                  className="rounded-full px-7 h-11 font-semibold text-sm"
                  render={<a href="#contact" />}
                >
                  Contact Me
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-7 h-11 font-semibold text-sm"
                  render={<a href="#projects" />}
                >
                  View Work
                </Button>
              </motion.div>

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
            </motion.div>
          </motion.div>

          {/* Right column — 3D Avatar scale-in */}
          <motion.div
            className="hidden md:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="w-full max-w-[400px] aspect-square">
              <Avatar3D />
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── Projects ─────────────────────────────────────────── */}
      <section id="projects" className="py-24">
        <Projects />
      </section>

      {/* ── About ────────────────────────────────────────────── */}
      <section id="about" className="py-24">
        <About />
      </section>

      {/* ── Contact ──────────────────────────────────────────── */}
      <section
        id="contact"
        className="py-24 flex items-center justify-center"
      >
        <Contact />
      </section>
    </>
  )
}
