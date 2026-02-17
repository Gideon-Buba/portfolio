import { Box, styled } from "@mui/material";
import React from "react";

const SocialIcon = styled("img")(({ theme }) => ({
  objectFit: "contain",
  display: "block",
  width: "auto",
  height: "auto",
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
          overflow: "hidden",
        }}
      >
        <a
          href="https://www.linkedin.com/in/gideon-buba-34aaa2190/"
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
          overflow: "hidden",
        }}
      >
        <a
          href="https://github.com/Gideon-Buba"
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
