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
      <SocialIcon src="/assets/icons/linkedin-icon.svg" alt="LinkedIn" />
      <SocialIcon src="/assets/icons/github-icon.svg" alt="GitHub" />
    </Box>
  );
};

export default SocialIcons;
