import { Box, styled } from "@mui/material";
import React from "react";

const SocialIcon = styled("img")({
  objectFit: "contain",
  display: "block",
  width: "25px",
  height: "25px",
  backgroundColor: "#222222",
  borderRadius: "50%",
  padding: "20px",
});

const SocialIcons: React.FC = () => {
  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        gap: "20px",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <SocialIcon src="/assets/icons/linkedin-icon.svg" alt="LinkedIn" />
      <SocialIcon src="/assets/icons/github-icon.svg" alt="GitHub" />
    </Box>
  );
};

export default SocialIcons;
