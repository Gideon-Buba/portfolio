export interface Experience {
  title: string
  company: string
  period: string
  type: "Remote" | "On-site"
  responsibilities: string[]
}

export const experiences: Experience[] = [
  {
    title: "Frontend Developer",
    company: "Co-creation Hub Africa (CcHUB)",
    period: "Aug – Nov 2024",
    type: "Remote",
    responsibilities: [
      "Worked on the Trade Intelligence project using React.",
      "Built responsive UI components from Figma designs.",
      "Gained hands-on experience with React and modern frontend workflows.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Publica AI",
    period: "Nov 2024 – Nov 2025",
    type: "On-site",
    responsibilities: [
      "Integrated REST and GraphQL APIs into frontend applications.",
      "Handled complex state and data flow across components.",
      "Improved UI logic for dynamic and interactive features.",
      "Wrote cleaner, reusable code following software architecture best practices.",
      "Worked closely with other developers to ship features efficiently.",
      "Built REST APIs backed by relational and non-relational databases.",
    ],
  },
]
