import { Box, styled } from "@mui/material";
import React from "react";

const SocialIcon = styled("img")(({ theme }) => ({
  objectFit: "contain",
  display: "block",
  width: "25px",
  height: "25px",
  backgroundColor: "#222222",
  borderRadius: "50%",
  // padding: "20px",
  cursor: "pointer",
  [theme.breakpoints.down("sm")]: {
    padding: "10px", // Reduce padding on smaller screens
  },
}));

const SocialIcons: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "10px",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          bgcolor: "#222222",
          height: "54px",
          width: "54px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
        }}
      >
        <a
          href="https://www.linkedin.com/in/oluwaseun-akintade-620b26223/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialIcon src="/assets/icons/linkedin-icon.svg" alt="LinkedIn" />
        </a>
      </Box>

      <Box
        sx={{
          bgcolor: "#222222",
          height: "54px",
          width: "54px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
        }}
      >
        <a
          href="https://github.com/tade-dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialIcon src="/assets/icons/github-icon.svg" alt="GitHub" />
        </a>
      </Box>
    </Box>
  );
};

export default SocialIcons;
