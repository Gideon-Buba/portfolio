import React, { useEffect, useRef, useState } from "react";
import { styled } from "@mui/system";
import { Box, Button, Typography } from "@mui/material";
import SocialIcons from "./SocialIcons";
import { About, Contact, Projects } from "./Navlinks";
import AOS from "aos";
import "aos/dist/aos.css";
import { createBouncyText } from "./utils/bouncyText";
import ArrowIcon from "/assets/images/arrow.png"; // Import your custom arrow icon

AOS.init();

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

const Container = styled(Box)(() => ({
  overflowY: "scroll",
  height: "100%",
  scrollBehavior: "smooth", // Ensure smooth scrolling
  // Hide scrollbar for WebKit browsers
  "&::-webkit-scrollbar": {
    display: "none",
  },
  // Hide scrollbar for Firefox
  scrollbarWidth: "none",
  // Hide scrollbar for IE and Edge
  msOverflowStyle: "none",
}));

const Section = styled(Box)(() => ({
  minHeight: "100vh",
}));

interface BlackHoleIconProps {
  isHovered: boolean;
}

const BlackHoleIcon: React.FC<BlackHoleIconProps> = ({ isHovered }) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="black-hole-icon"
  >
    <circle cx="12" cy="12" r="8" fill="black" />
    {isHovered && (
      <foreignObject x="8" y="8" width="8" height="8">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <img
            src={ArrowIcon}
            alt="arrow"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </Box>
      </foreignObject>
    )}
  </svg>
);

const Hero: React.FC = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    AOS.init({
      // Global settings for AOS
      duration: 1200,
    });
  }, []);

  const handleContactMeClick = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Container>
      {/* Hero section */}
      <Section>
        <HeroContainer data-aos="fade-up">
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
              {createBouncyText("hi, i am")} <br />
            </Typography>

            <Typography
              sx={{
                fontFamily: "Bebas Neue",
                color: "#FFFFFF",
                fontSize: "90px",
                lineHeight: 1,
              }}
            >
              {createBouncyText("AKINTADE OLUWASEUN")}
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
                endIcon={<BlackHoleIcon isHovered={isHovered} />}
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
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  "&:hover .black-hole-icon": {
                    transform: "scale(4)",
                    transition: "transform 0.3s ease",
                  },
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={handleContactMeClick}
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
      </Section>

      {/* Projects section */}
      <Section data-aos="fade-up">
        <Projects />
      </Section>

      {/* About section */}
      <Section data-aos="fade-up">
        <About />
      </Section>

      {/* Contact section */}
      <Section
        data-aos="fade-up"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        ref={contactRef}
      >
        <Contact />
      </Section>
    </Container>
  );
};

export default Hero;
