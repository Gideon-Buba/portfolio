import { Box, styled } from "@mui/material";
import React from "react";

const SocialIcon = styled("img")({
  objectFit: "contain",
  display: "block",
  width: "auto",
  height: "auto",
  backgroundColor: "#222222",
  borderRadius: "50%",
  padding: "20px",
  cursor: "pointer",
});

const SocialIcons: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "10px",
        alignItems: "center",
      }}
    >
      <a
        href="https://www.linkedin.com/in/oluwaseun-akintade-620b26223/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialIcon src="/assets/icons/linkedin-icon.svg" alt="LinkedIn" />
      </a>
      <a
        href="https://github.com/tade-dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialIcon src="/assets/icons/github-icon.svg" alt="GitHub" />
      </a>
    </Box>
  );
};

export default SocialIcons;
