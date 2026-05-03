export interface Project {
  id: number
  thumbnail: string
  title: string
  description: string[]
  client: string
  period: string
  role: string
  liveUrl: string
  githubUrl?: string
  tags: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    thumbnail: "/assets/images/tradeintelligence.png",
    title: "Trade Intelligence",
    description: [
      "Developed a responsive landing page ensuring seamless UX across all devices.",
      "Implemented a real-time chat section for logged-in users.",
      "Built a report generator that accepts user prompts and outputs downloadable PDFs.",
    ],
    client: "Co-creation Hub (CcHUB)",
    period: "Aug – Nov 2024",
    role: "Frontend Developer",
    liveUrl: "https://trade-intelligence.ncair.nitda.gov.ng/",
    tags: ["React", "TypeScript"],
  },
  {
    id: 2,
    thumbnail: "/assets/images/3mtt.png",
    title: "3MTT Learning Platform",
    description: [
      "Implemented an AI-driven chat interface tailored to each user's registered course.",
      "Ensured a seamless and responsive experience across all devices.",
    ],
    client: "Publica AI",
    period: "Nov 2024 – Nov 2025",
    role: "Frontend Developer",
    liveUrl: "https://3mtt.ncair.nitda.gov.ng/",
    tags: ["React", "TypeScript", "AI"],
  },
  {
    id: 3,
    thumbnail: "/assets/images/publicaai.png",
    title: "Publica AI Website",
    description: [
      "Developed the fully responsive company website with optimised performance.",
      "Applied modern CSS techniques and JS frameworks to enhance UX.",
      "Collaborated with designers to ensure pixel-perfect implementation.",
    ],
    client: "Publica AI",
    period: "Dec 2023 – Nov 2025",
    role: "Frontend Developer",
    liveUrl: "https://www.publicaai.com/",
    tags: ["React", "TypeScript", "CSS"],
  },
  {
    id: 4,
    thumbnail: "/assets/images/airflow.png",
    title: "Airflow",
    description: [
      "Built a smart flight-booking platform with AI integration as part of a team.",
      "Implemented role-based authentication and authorisation (RBAC).",
      "Managed complex global state and integrated AI-driven backend features.",
    ],
    client: "Publica AI / Airflow",
    period: "Feb – Mar 2025",
    role: "Frontend Developer",
    liveUrl: "https://airflow.publicaai.com/",
    tags: ["React", "TypeScript", "RBAC", "AI"],
  },
]
