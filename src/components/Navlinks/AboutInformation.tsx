import React from "react";
import { Box, Paper, Typography } from "@mui/material";

const languages = ["JAVASCRIPT", "TYPESCRIPT", "SQL", "GOLANG"];

const frameworks = [
  "React",
  "Tailwind",
  "Express",
  "NestJS",
  "Tailwind CSS",
  "Bootstrap",
  "Material-UI",
  "Jest",
  "Mocha",
];

const experiences = [
  {
    title: "Frontend Developer (Remote)",
    company: "Co-creation hub Africa (CCHUB)",
    date: "August - November 2024",
    responsibilities: [
      "Worked on the Trade Intelligence project using React.",
      "Built responsive UI components from design.",
      "Gained practical experience with React and modern frontend development.",
    ],
  },
  {
    title: "Frontend Developer (On-site)",
    company: "Publica AI",
    date: "November 2024 - November 2025",
    responsibilities: [
      "Integrated REST and GraphQL APIs into frontend applications.",
      "Handled complex state and data flow across components.",
      "Improved UI logic for dynamic and interactive features.",
      "Learned to write cleaner, reusable code and follow software architecture best practices from planning to execution.",
      "Worked closely with other developers to ship features efficiently.",
      "Built REST APIs using relational and non-relational databases.",
    ],
  },
];

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      flexDirection: { xs: "column", md: "row" },
      gap: { xs: 4, md: 8 },
      my: 5,
    }}
  >
    <Typography
      sx={{
        fontFamily: "Bebas Neue",
        fontWeight: 400,
        fontSize: { xs: "60px", md: "101px" },
        lineHeight: 1,
        whiteSpace: "nowrap",
      }}
    >
      {title}
    </Typography>
    <Box sx={{ maxWidth: "747px", textAlign: "left" }}>{children}</Box>
  </Box>
);

const AboutInformation: React.FC = () => {
  return (
    <Box>
      {/* Education Box */}
      <Section title="MY EDUCATION">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Manrope",
              fontWeight: 500,
              lineHeight: { xs: "33.6px", md: "44.8px" },
              fontSize: { xs: "24px", md: "32px" },
            }}
          >
            BINGHAM UNIVERSITY
          </Typography>

          <Typography
            sx={{
              fontFamily: "Manrope",
              fontWeight: 400,
              fontSize: "18px",
              color: "#C7C7C7",
              mt: { xs: 2, md: 0 },
            }}
          >
            Dec. 2023
          </Typography>
        </Box>

        <Typography sx={{ color: "#D3E97A", mb: 2 }}>
          BSC. Computer Science
        </Typography>

        <Box
          component="ul"
          sx={{
            paddingLeft: "1.5rem",
            margin: 0,
            listStylePosition: "outside",
          }}
        >
          <Box
            component="li"
            sx={{
              fontFamily: "Manrope",
              color: "#C7C7C7",
              fontWeight: 500,
              lineHeight: "27px",
              fontSize: { xs: "16px", md: "18px" },
              display: "list-item",
            }}
          >
            <strong>Coursework:</strong> Software Engineering, Web Development,
            Database Management, Digital Logic Design, Computer Architecture,
            Data Structures and Algorithms, Mathematics, Statistics, Object
            Oriented Programming
          </Box>
        </Box>
      </Section>

      {/* Capabilities box */}
      <Section title="My Capabilities">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            mb: 3,
          }}
        >
          <Typography
            sx={{
              fontFamily: "Manrope",
              fontWeight: 700,
              fontSize: "20px",
              lineHeight: "20px",
              my: 2,
            }}
          >
            LANGUAGES
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            {languages.map((language, index) => (
              <Paper
                key={index}
                variant="outlined"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 1.8,
                  color: "#FFFFFF",
                  bgcolor: "#0a0a0a",
                  borderRadius: "100px",
                  fontFamily: "Manrope",
                  fontWeight: 700,
                  fontSize: "16px",
                  border: "1px solid #484848",
                  whiteSpace: "nowrap",
                  flex: "1 1 auto",
                  maxWidth: "200px",
                  ":hover": {
                    bgcolor: "#D3E97A",
                    color: "#0A0A0A",
                    transition: "all 0.3s ease-in-out",
                  },
                }}
              >
                {language}
              </Paper>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 10,
            my: 8,
          }}
        >
          <Typography
            sx={{
              fontFamily: "Manrope",
              fontWeight: 700,
              fontSize: "20px",
              lineHeight: "20px",
              my: 2,
            }}
          >
            FRAMEWORKS
          </Typography>
          <Box
            sx={{
              width: "400px",
              display: "flex",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            {frameworks.map((framework, index) => (
              <Paper
                key={index}
                variant="outlined"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 1.8,
                  color: "#FFFFFF",
                  bgcolor: "#0a0a0a",
                  borderRadius: "100px",
                  fontFamily: "Manrope",
                  fontWeight: 700,
                  fontSize: "16px",
                  border: "1px solid #484848",
                  whiteSpace: "nowrap",
                  flex: "1 1 auto",
                  maxWidth: "200px",
                  textTransform: "uppercase",
                  ":hover": {
                    bgcolor: "#D3E97A",
                    color: "#0A0A0A",
                    transition: "all 0.3s ease-in-out",
                  },
                }}
              >
                {framework}
              </Paper>
            ))}
          </Box>
        </Box>
      </Section>

      {/* Experience Box */}
      <Section title="My Experience">
        {experiences.map((experience, index) => (
          <Box key={index} sx={{ mb: 4 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: { xs: "flex-start", md: "center" },
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontWeight: 500,
                  lineHeight: { xs: "33.6px", md: "44.8px" },
                  fontSize: "24px",
                }}
              >
                {experience.title}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontWeight: 400,
                  fontSize: "18px",
                  color: "#C7C7C7",
                  mt: { xs: 2, md: 0 },
                }}
              >
                {experience.date}
              </Typography>
            </Box>

            <Typography
              sx={{
                color: "#D3E97A",
                fontFamily: "Manrope",
                fontWeight: 600,
                fontSize: "18px",
                mb: 2,
              }}
            >
              {experience.company}
            </Typography>

            <Box component="ul" sx={{ paddingLeft: "1.5rem", margin: 0 }}>
              {experience.responsibilities.map((responsibility, idx) => (
                <Box
                  component="li"
                  key={idx}
                  sx={{
                    fontFamily: "Manrope",
                    color: "#C7C7C7",
                    fontWeight: 500,
                    lineHeight: "27px",
                    fontSize: { xs: "16px", md: "18px" },
                  }}
                >
                  {responsibility}
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Section>
    </Box>
  );
};

export default AboutInformation;
