import { Box, Typography, IconButton, Drawer } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import SocialIcons from "./SocialIcons";
import hamburgerIcon from "/assets/icons/hamburger-icon.svg";

const NavBar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#C7C7C7",
    fontSize: "18px",
    transition: "color 0.3s ease, background-color 0.3s ease",
    borderRadius: "20px",
    backgroundColor: "#141414",
    height: "48px",
    width: "158px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      color: "#0A0A0A",
      backgroundColor: "#D3E97A",
    },
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "112px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingX: { xs: "16px", md: "32px" },
      }}
    >
      {/* Logo */}
      <Typography
        sx={{
          fontFamily: "Bebas Neue",
          color: "#C7C7C7",
          fontSize: "37px",
        }}
      >
        TADE.ME
      </Typography>

      {/* Hamburger Icon for Mobile */}
      <IconButton
        sx={{
          display: { xs: "block", md: "none" },
          color: "#C7C7C7",
        }}
        onClick={toggleDrawer}
      >
        <img
          src={hamburgerIcon}
          alt="menu"
          style={{ width: "40px", height: "40px" }}
        />
      </IconButton>

      {/* Nav Links (Hidden on Mobile) */}
      <Box
        sx={{
          fontFamily: "Manrope",
          display: { xs: "none", md: "flex" },
          gap: "16px",
          justifyContent: "space-evenly",
          alignItems: "center",
          color: "#C7C7C7",
          padding: "10px",
          backgroundColor: "#141414",
          borderRadius: "80px",
          width: "490px",
          height: "64px",
          backdropFilter: "blur(10px)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          border: "1px solid #232323",
        }}
      >
        <Link to="/about" style={linkStyle}>
          About
        </Link>
        <Link to="/projects" style={linkStyle}>
          Projects
        </Link>
        <Link to="/contact" style={linkStyle}>
          Contact
        </Link>
      </Box>

      {/* Social Icons (Hidden on Mobile) */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" }, // Hidden on mobile
        }}
      >
        <SocialIcons />
      </Box>

      {/* Drawer for Mobile Nav */}
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
        <Box
          sx={{
            width: 250,
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
            backgroundColor: "#141414",
            height: "100%",
          }}
        >
          <IconButton onClick={toggleDrawer} sx={{ alignSelf: "flex-end" }}>
            <CloseIcon sx={{ color: "#C7C7C7" }} />
          </IconButton>
          <Link to="/about" style={linkStyle}>
            About
          </Link>
          <Link to="/projects" style={linkStyle}>
            Projects
          </Link>
          <Link to="/contact" style={linkStyle}>
            Contact
          </Link>
        </Box>
      </Drawer>
    </Box>
  );
};

export default NavBar;
