import React from "react";
import { styled } from "@mui/system";
import { Box, Button, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import SocialIcons from "./SocialIcons";
import { About, Contact, Projects } from "./Navlinks";

const HeroContainer = styled(Box)(() => ({
  width: "100%",
  height: "100%",
  display: "grid",
  gridTemplateColumns: "1.5fr 1fr",
  gridTemplateRows: "1fr",
  gridColumnGap: "0px",
  gridRowGap: "0px",

  "@media (max-width: 700px)": {
    gridTemplateColumns: "1fr",
    gridTemplateRows: "auto auto",
  },
}));

const HeroTextContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  marginTop: "90px",
}));

const SnapContainer = styled(Box)(() => ({
  scrollSnapType: "y mandatory",
  overflowY: "scroll",
  height: "100vh",
  // Hide scrollbar for WebKit browsers
  "&::-webkit-scrollbar": {
    display: "none",
  },
  // Hide scrollbar for Firefox
  scrollbarWidth: "none",
  // Hide scrollbar for IE and Edge
  msOverflowStyle: "none",
}));

const SnapSection = styled(Box)(() => ({
  scrollSnapAlign: "start",
  minHeight: "100vh",
}));

const Hero: React.FC = () => {
  return (
    <SnapContainer>
      {/* Hero section */}
      <SnapSection>
        <HeroContainer>
          <HeroTextContainer>
            {/* "hi, i am" text, hidden on mobile */}
            <Typography
              sx={{
                fontFamily: "Bebas Neue",
                color: "#FFFFFF",
                fontSize: "90px",
                lineHeight: 1,
                display: { xs: "none", md: "block" }, // Hide on mobile (xs)
              }}
            >
              hi, i am <br />
            </Typography>

            <Typography
              sx={{
                fontFamily: "Bebas Neue",
                color: "#FFFFFF",
                fontSize: "90px",
                lineHeight: 1,
              }}
            >
              AKINTADE OLUWASEUN
            </Typography>

            <Typography
              sx={{
                fontFamily: "manrope",
                lineHeight: "27px",
                fontWeight: 400,
                color: "#C7C7C7",
                fontSize: "18px",
                textWrap: "word-break",
              }}
            >
              I am a mobile app developer with 3 years of experience in creating
              high-quality apps using Flutter. Passionate about learning new
              technologies and solving problems. Skilled in teamwork and
              delivering user-friendly, scalable solutions in agile
              environments.
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <Button
                variant="contained"
                endIcon={<ArrowOutwardIcon />}
                disableElevation
                sx={{
                  width: "187px",
                  height: "54px",
                  backgroundColor: "#D3E97A",
                  fontFamily: "Manrope",
                  fontSize: "16px",
                  fontWeight: 700,
                  lineHeight: "27px",
                  color: "#0A0A0A",
                  borderRadius: "100px",
                }}
              >
                CONTACT ME
              </Button>
              <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <SocialIcons />
              </Box>
            </Box>
          </HeroTextContainer>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src="/assets/images/memoji.png"
              alt="memoji"
              sx={{
                width: { xs: "200px", sm: "300px", md: "500px" },
                height: { xs: "200px", sm: "300px", md: "500px" },
              }}
            />
          </Box>
        </HeroContainer>
      </SnapSection>

      {/* Projects section */}
      <SnapSection
        sx={{
          pt: 5,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Projects />
      </SnapSection>

      {/* About section */}
      <SnapSection
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <About />
      </SnapSection>

      {/* Contact section */}
      <SnapSection
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Contact />
      </SnapSection>
    </SnapContainer>
  );
};

export default Hero;
