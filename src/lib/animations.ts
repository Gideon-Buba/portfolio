import { Variants } from "framer-motion"

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
}

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export const stagger = (delay = 0.1): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: delay, delayChildren: 0.05 } },
})
