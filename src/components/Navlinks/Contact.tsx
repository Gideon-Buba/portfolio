import { useState } from "react"
import emailjs from "@emailjs/browser"
import { Mail, Phone, FileText, Loader2, ArrowRight, CheckCircle } from "lucide-react"
import { SiLinkedin, SiGithub } from "react-icons/si"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { fadeUp, stagger } from "@/lib/animations"

/* ── Types ────────────────────────────────────────────────────── */
interface FormValues {
  name: string
  email: string
  subject: string
  message: string
}

type SubmitStatus = "idle" | "loading" | "success" | "error"

const INITIAL_FORM: FormValues = { name: "", email: "", subject: "", message: "" }

const CONTACT_DETAILS = [
  {
    icon: Mail,
    label: "Email",
    value: "bubaambore@gmail.com",
    href: "mailto:bubaambore@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+234 818 790 9619",
    href: "tel:+2348187909619",
  },
  {
    icon: FileText,
    label: "Resume",
    value: "View resume",
    href: "https://docs.google.com/document/d/1IFbsc8D6tuv7o4zrPy92TuLFJe1PsHMquOw_e4QAOys/edit",
  },
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

/* ── Field wrapper ────────────────────────────────────────────── */
function FormField({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-foreground">{label}</label>
      {children}
      {error && (
        <p className="text-xs text-destructive">{error}</p>
      )}
    </div>
  )
}

/* ── Main component ───────────────────────────────────────────── */
export default function Contact() {
  const [form, setForm] = useState<FormValues>(INITIAL_FORM)
  const [errors, setErrors] = useState<Partial<FormValues>>({})
  const [status, setStatus] = useState<SubmitStatus>("idle")

  function validate(): boolean {
    const next: Partial<FormValues> = {}
    if (!form.name.trim()) next.name = "Name is required."
    if (!form.email.trim()) {
      next.email = "Email is required."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Enter a valid email address."
    }
    if (!form.subject.trim()) next.subject = "Subject is required."
    if (!form.message.trim()) next.message = "Message is required."
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormValues]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return

    setStatus("loading")
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setStatus("success")
      setForm(INITIAL_FORM)
    } catch {
      setStatus("error")
    }
  }

  return (
    <div className="w-full">
      <div className="grid gap-16 md:grid-cols-[1fr_1.2fr] md:gap-24">

        {/* ── Left: contact info ──────────────────────────── */}
        <motion.div
          className="flex flex-col gap-8"
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.div variants={fadeUp} className="flex flex-col gap-4">
            <h2 className="font-heading text-7xl leading-none text-foreground md:text-8xl">
              LET'S
              <br />
              CONNECT
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Have a project in mind or want to work together? Send a message
              and I'll get back to you as soon as possible.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}><Separator /></motion.div>

          {/* Contact details */}
          <motion.div variants={fadeUp} className="flex flex-col gap-5">
            {CONTACT_DETAILS.map(({ icon: Icon, label, value, href }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 transition-colors hover:text-primary"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full
                                border border-border transition-all duration-200
                                group-hover:border-primary group-hover:bg-primary/10">
                  <Icon size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground">{label}</span>
                  <span className="text-sm font-medium">{value}</span>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div variants={fadeUp}><Separator /></motion.div>

          {/* Social links */}
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="size-10 flex items-center justify-center rounded-full border border-border
                           text-muted-foreground transition-all duration-200
                           hover:border-primary hover:text-primary"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Icon size={17} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Right: form ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {status === "success" ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 py-16 text-center">
              <CheckCircle size={48} className="text-primary" />
              <h3 className="font-heading text-4xl text-foreground">Message sent!</h3>
              <p className="text-muted-foreground">
                Thanks for reaching out. I'll get back to you shortly.
              </p>
              <Button
                variant="outline"
                className="mt-2 rounded-full"
                onClick={() => setStatus("idle")}
              >
                Send another
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <FormField label="Name" error={errors.name}>
                  <Input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Gideon Buba"
                    aria-invalid={!!errors.name}
                    className="h-11"
                  />
                </FormField>

                <FormField label="Email" error={errors.email}>
                  <Input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="hello@example.com"
                    aria-invalid={!!errors.email}
                    className="h-11"
                  />
                </FormField>
              </div>

              <FormField label="Subject" error={errors.subject}>
                <Input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project enquiry"
                  aria-invalid={!!errors.subject}
                  className="h-11"
                />
              </FormField>

              <FormField label="Message" error={errors.message}>
                <Textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  aria-invalid={!!errors.message}
                  className="min-h-[140px] resize-none"
                />
              </FormField>

              {status === "error" && (
                <p className="text-sm text-destructive">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}

              <motion.div
                className="self-start"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
              <Button
                type="submit"
                disabled={status === "loading"}
                className="group/btn rounded-full h-12 px-8 font-semibold text-sm gap-2"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={15} className="animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover/btn:translate-x-0.5"
                    />
                  </>
                )}
              </Button>
              </motion.div>
            </form>
          )}
        </motion.div>

      </div>
    </div>
  )
}
