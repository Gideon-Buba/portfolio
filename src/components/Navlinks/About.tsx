import { Box, Typography, Button, Paper } from "@mui/material";
import React from "react";
import SocialIcons from "../SocialIcons";

const languages = ["JAVASCRIPT", "SWIFT", "DART"];

const frameworks = [
  "Flutter",
  "UIKit",
  "SwiftUI",
  "Android Studio",
  "Xcode",
  "React Native",
  "Firebase",
  "Google Api’s",
  "gemini",
];

const experiences = [
  {
    title: "Mobile App Developer (Remote) - Flutter",
    company: "Zabira Technologies",
    date: "Sept 2024 - Present",
    responsibilities: [
      "Developed and maintained core features for Zabira's crypto and gift card trading app using Flutter, enhancing user experience and app performance.",
      "Revamped applications navigation system and implemented custom routes to improve app's seamlessness and boost performance.",
      "Collaborated with cross-functional teams to optimize mobile app architecture, reducing load times and improving overall app efficiency.",
      "Integrated secure APIs to facilitate seamless crypto transactions and real-time gift card trading functionality.",
    ],
  },
  {
    title: "Mobile App Developer (Hybrid) - Flutter, UIKit, SwiftUi",
    company: "Scnip Capitol Ltd",
    date: "March 2024 - July 2024",
    responsibilities: [
      "Led the development of different mobile applications using Flutter, UIKit, and SwiftUI, delivering high-performance apps for iOS and Android platforms.",
      "Collaborated with design and backend teams to implement intuitive user interfaces and seamless user experiences across financial services.",
      " Optimized app performance and reduced crash rates by implementing best coding practices and continuous testing for both Flutter and native iOS features",
    ],
  },
  {
    title: "Mobile Developer Intern - Flutter, Node.js, Firebase",
    company: "AITECH",
    date: "June 2023 - September 2023",
    responsibilities: [
      "Gained hands-on experience with Flutter, React Native, and Node.js by developing and maintaining mobile applications during the internship.",
      "Assisted in building cross-platform apps and integrating backend services, strengthening my understanding of mobile development frameworks and server-side technologies.",
      "Collaborated with senior developers to troubleshoot and optimize code, enhancing my problem-solving skills and understanding of mobile app architecture",
    ],
  },
];

const About: React.FC = () => {
  return (
    <Box
      sx={{
        color: "#FFFFFF",
        py: 5,
      }}
    >
      {/* About container */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          alignContent: "flex-start",
          my: 5,
        }}
      >
        {/* About me title */}
        <Typography
          sx={{
            fontFamily: "Bebas Neue",
            fontWeight: 400,
            fontSize: { xs: "60px", md: "101px" }, // responsive font size
            lineHeight: 1,
          }}
        >
          About Me
        </Typography>

        {/* Description */}
        <Box sx={{ maxWidth: "747px", textAlign: "left" }}>
          <Typography
            sx={{
              fontFamily: "Manrope",
              fontWeight: 500,
              lineHeight: { xs: "33.6px", md: "44.8px" },
              fontSize: { xs: "24px", md: "32px" },
              mb: 3,
            }}
          >
            I am a mobile app developer based in Abuja. Has Computer Science
            background.
          </Typography>

          <Typography
            sx={{
              fontFamily: "Manrope",
              color: "#C7C7C7",
              fontWeight: 500,
              lineHeight: "27px",
              fontSize: { xs: "16px", md: "18px" },
              mb: 3,
            }}
          >
            I am a mobile app developer with 3 years of experience in creating
            high-quality apps using Flutter. Passionate about earning new
            technologies and solving problems. Skilled in teamwork and
            delivering user-friendly, scalable solutions in agile environments.
          </Typography>

          {/* Download Resume and social buttons */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "flex-start",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              sx={{
                bgcolor: "#D3E97A",
                borderRadius: "100px",
                color: "#000",
                fontWeight: 600,
                px: 3,
                py: 1,
                height: "54px",
                whiteSpace: "nowrap",
              }}
            >
              Download Resume
            </Button>
            <SocialIcons />

            {/* Memoji image will appear under on smaller screens */}
            <Box
              sx={{
                order: { xs: 3, md: 0 }, // Place image last on small screens
                display: { md: "none", xs: "flex" },
                justifyContent: { xs: "center", md: "flex-start" },
                width: "100%",
              }}
            >
              <Box
                component="img"
                src="/assets/images/memoji.png"
                alt="memoji"
                sx={{
                  width: { xs: "200px", sm: "300px", md: "500px" },
                  height: { xs: "200px", sm: "300px", md: "500px" },
                  mx: "auto", // Center the image on small screens
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Education Box */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap", // ensure responsiveness
          alignContent: "flex-start",
          mt: 22,
        }}
      >
        <Typography
          sx={{
            fontFamily: "Bebas Neue",
            fontWeight: 400,
            fontSize: { xs: "60px", md: "101px" }, // responsive font size
            lineHeight: 1,
          }}
        >
          My EDUCATION
        </Typography>

        {/* Description */}
        <Box sx={{ maxWidth: "747px", textAlign: "left" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
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
              VERITAS UNIVERSITY ABUJA
            </Typography>

            <Typography
              sx={{
                fontFamily: "Manrope",
                fontWeight: 400,
                fontSize: "18px",
                color: "#C7C7C7",
              }}
            >
              Dec. 2023
            </Typography>
          </Box>

          <Typography sx={{ color: "#D3E97A", mb: 2 }}>
            BSC. Computer Science
          </Typography>

          {/* Single bullet point coursework list */}
          <Box
            component="ul"
            sx={{
              paddingLeft: "1.5rem", // Provide space between bullet and text
              margin: 0,
              listStylePosition: "outside", // Ensure bullet is outside the text block
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
                display: "list-item", // Ensures bullet is treated properly
              }}
            >
              <strong>Coursework:</strong> Software Engineering, Web
              Programming, Database Management, Digital Logic Design, Computer
              Architecture, Data Structures and Algorithms
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Capabilities box */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          alignContent: "flex-start",
          mt: 22,
        }}
      >
        <Typography
          sx={{
            fontFamily: "Bebas Neue",
            fontWeight: 400,
            fontSize: { xs: "60px", md: "101px" },
            lineHeight: 1,
          }}
        >
          My Capabilities
        </Typography>

        {/* Description */}
        <Box sx={{ maxWidth: "747px", textAlign: "right" }}>
          {/* Languages */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap", // Enable wrapping
              mb: 3, // Add some margin below
            }}
          >
            <Typography
              sx={{
                fontFamily: "Manrope",
                fontWeight: 700,
                fontSize: "20px",
                // lineHeight: "20px",
                // my: 2,
              }}
            >
              LANGUAGES
            </Typography>

            <Box
              sx={{
                display: "flex", // Keep flex for horizontal layout
                gap: 2,
                flexWrap: "wrap", // Enable wrapping of cards
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
                    bgcolor: "black",
                    borderRadius: "100px",
                    fontFamily: "Manrope",
                    fontWeight: 700,
                    fontSize: "16px",
                    border: "1px solid #484848",
                    whiteSpace: "nowrap",
                    minWidth: "120px", // Set a minimum width for responsiveness
                    flex: "1 1 auto", // Allow cards to grow and shrink
                    maxWidth: "200px", // Set a max width for cards
                  }}
                >
                  {language}
                </Paper>
              ))}
            </Box>
          </Box>

          {/* Frameworks */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap", // Enable wrapping
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
                display: "flex",
                gap: 2,
                flexWrap: "wrap", // Enable wrapping of cards
              }}
            >
              {frameworks.map((framework, index) => (
                <Paper
                  key={index}
                  elevation={3}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 1.8,
                    color: "#FFFFFF",
                    bgcolor: "black",
                    borderRadius: "100px",
                    fontFamily: "Manrope",
                    fontWeight: 700,
                    fontSize: "16px",
                    border: "1px solid #484848",
                    whiteSpace: "nowrap",
                    minWidth: "120px", // Set a minimum width for responsiveness
                    flex: "1 1 auto", // Allow cards to grow and shrink
                    maxWidth: "200px", // Set a max width for cards
                  }}
                >
                  {framework}
                </Paper>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Experience Box */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap", // ensure responsiveness
          alignContent: "flex-start",
          mt: 22,
        }}
      >
        <Typography
          sx={{
            fontFamily: "Bebas Neue",
            fontWeight: 400,
            fontSize: { xs: "60px", md: "101px" }, // responsive font size
            lineHeight: 1,
          }}
        >
          My Experience
        </Typography>

        {/* Description */}
        <Box sx={{ maxWidth: "755px", textAlign: "left" }}>
          {experiences.map((experience, index) => (
            <Box key={index} sx={{ mb: 4 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
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

              {/* Bullet point list */}
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
        </Box>
      </Box>
    </Box>
  );
};

export default About;
