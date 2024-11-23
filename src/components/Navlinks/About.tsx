import { Box, Typography, Button, Icon } from "@mui/material";
import React, { useState, useEffect } from "react";
import SocialIcons from "../SocialIcons";
import AboutInformation from "./AboutInformation";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS
AOS.init();

const DownloadIcon = (
  <Icon
    sx={{
      width: "auto",
      height: "auto",
      padding: 1,
      backgroundColor: "#0A0A0A",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "20px",
    }}
  >
    <img src="/assets/icons/download-icon.svg" alt="download" />
  </Icon>
);

interface AboutProps {
  showAboutInfo?: boolean;
  showButtons?: boolean;
  isAboutPage?: boolean;
}

const About: React.FC<AboutProps> = ({
  showAboutInfo = false,
  showButtons = false,
  isAboutPage = false,
}) => {
  const [localShowAboutInfo, setLocalShowAboutInfo] = useState(showAboutInfo);
  const [localShowButtons, setLocalShowButtons] = useState(showButtons);

  useEffect(() => {
    if (isAboutPage) {
      setLocalShowAboutInfo(true);
      setLocalShowButtons(true);
    }
  }, [isAboutPage]);

  const handleMoreAboutClick = () => {
    setLocalShowAboutInfo(true);
    setLocalShowButtons(true);
  };

  return (
    <Box
      sx={{
        color: "#FFFFFF",
        width: "100%",
      }}
    >
      {/* About container */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
          gap: { md: 22 },
          mt: "100px",
          my: 5,
        }}
      >
        {/* About me title */}
        <Typography
          sx={{
            fontFamily: "Bebas Neue",
            fontWeight: 400,
            fontSize: { xs: "60px", md: "101px" },
            lineHeight: 1,
            whiteSpace: "nowrap",
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

          <Box sx={{ display: "flex", flexDirection: "column" }}>
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
              delivering user-friendly, scalable solutions in agile
              environments.
            </Typography>
            {!localShowButtons && !isAboutPage && (
              <Box>
                <Typography
                  component="a"
                  onClick={handleMoreAboutClick}
                  sx={{
                    position: "relative",
                    color: "#D3E97A",
                    textDecoration: "none",
                    fontWeight: 600,
                    cursor: "pointer",
                    display: "inline-flex",
                    gap: "5px",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      width: "0%",
                      height: "2px",
                      bottom: "-3px",
                      left: "0",
                      backgroundColor: "#D3E97A",
                      transition: "width 0.3s ease-out",
                    },
                    "&:hover::after": {
                      width: "100%",
                    },
                    "& .hoverIcon": {
                      opacity: 0,
                      transition: "opacity 0.3s ease-out",
                    },
                    "&:hover .hoverIcon": {
                      opacity: 1,
                    },
                  }}
                >
                  MORE ABOUT ME
                  <ArrowOutwardIcon
                    className="hoverIcon"
                    sx={{ fontSize: "20px" }}
                  />
                </Typography>
              </Box>
            )}
          </Box>

          {/* Download Resume and social buttons */}
          {localShowButtons && (
            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: "flex-start",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Button
                  variant="contained"
                  endIcon={DownloadIcon}
                  sx={{
                    bgcolor: "#D3E97A",
                    borderRadius: "100px",
                    color: "#000",
                    fontWeight: 600,
                    fontFamily: "Manrope",
                    fontSize: { xs: "14px", sm: "16px" },
                    width: { xs: "212px", sm: "235px" },
                    height: "54px",
                    whiteSpace: "nowrap",
                  }}
                >
                  Download Resume
                </Button>
                <Box
                  sx={{
                    display: "flex",
                    gap: { xs: 1, sm: 2 }, // Adjust gap between icons
                    alignItems: "center",
                  }}
                >
                  <SocialIcons />
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
      {/* Conditionally render AboutInformation based on the showAboutInfo prop */}
      {localShowAboutInfo && (
        <Box data-aos="fade-down">
          <AboutInformation />
        </Box>
      )}
    </Box>
  );
};

export default About;
