import { Box, Typography, Divider } from "@mui/material";
import React from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

// Define the type for the project props
interface ProjectProps {
  thumbnail: string;
  projectTitle: string;
  caption: string[];
  client: string;
  period: string;
  role: string;
  liveSiteLink: string;
}

// Reusable ProjectDetail component
const ProjectDetail: React.FC<{ label: string; value: string }> = ({
  label,
  value,
}) => (
  <Box sx={{ display: "flex", justifyContent: "space-between" }}>
    <Typography
      variant="body2"
      sx={{
        color: "#FFFFFF",
        marginBottom: "4px",
        fontWeight: "500",
        fontFamily: "Manrope",
        fontSize: { xs: "14px", md: "16px" },
      }}
    >
      {label}
    </Typography>
    <Typography
      variant="body2"
      sx={{
        color: "#FFFFFF",
        marginBottom: "4px",
        fontWeight: "500",
        fontFamily: "Manrope",
        fontSize: { xs: "14px", md: "16px" },
      }}
    >
      {value}
    </Typography>
  </Box>
);

// Single project card component
const ProjectCard: React.FC<ProjectProps> = ({
  thumbnail,
  projectTitle,
  caption,
  client,
  period,
  role,
  liveSiteLink,
}) => {
  return (
    <Box
      // data-aos="fade-up" // AOS animation attribute
      sx={{
        marginBottom: "100px",
        display: { xs: "block", md: "grid" },
        gridTemplateColumns: { md: "1fr 2fr" },
        gridTemplateRows: "1fr",
        gap: "24px",
        alignItems: "center",
      }}
    >
      {/* Thumbnail image */}
      <Box
        sx={{
          width: { xs: "100%", md: "600px" },
          height: { xs: "300px", md: "600px" },
          bgcolor: "#1A1A1A",
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={thumbnail}
          alt={projectTitle}
          sx={{ width: "488px", maxWidth: "488px", height: "auto" }}
        />
      </Box>

      {/* Project details */}
      <Box>
        <Typography
          variant="h4"
          sx={{
            my: "8px",
            color: "#FFFFFF",
            fontFamily: "Manrope",
            fontWeight: 500,
            fontSize: { xs: "24px", md: "32px" },
            lineHeight: { xs: "32px", md: "44.8px" },
          }}
        >
          {projectTitle}
        </Typography>

        <ul
          style={{
            marginBottom: "27px",
            color: "#C7C7C7",
            paddingLeft: "16px",
          }}
        >
          {caption.map((item, index) => (
            <li key={index}>
              <Typography
                variant="body1"
                sx={{
                  color: "#C7C7C7",
                  fontFamily: "Manrope",
                  fontWeight: 400,
                  fontSize: { xs: "16px", md: "18px" },
                  lineHeight: { xs: "24px", md: "27px" },
                }}
              >
                {item}
              </Typography>
            </li>
          ))}
        </ul>

        <Typography
          variant="h6"
          sx={{
            marginBottom: "8px",
            color: "#FFFFFF",
            fontFamily: "Manrope",
            fontWeight: 600,
            fontSize: { xs: "14px", md: "16px" },
          }}
        >
          PROJECT INFO
        </Typography>
        <Divider sx={{ backgroundColor: "#C7C7C7", my: "10px" }} />

        {/* Project details listed below */}
        <Box
          sx={{
            marginBottom: "30px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "15px",
          }}
        >
          <ProjectDetail label="Client" value={client} />
          <Divider sx={{ backgroundColor: "#C7C7C7", my: "10px" }} />

          <ProjectDetail label="Period" value={period} />
          <Divider sx={{ backgroundColor: "#C7C7C7", my: "10px" }} />

          <ProjectDetail label="Role" value={role} />
          <Divider sx={{ backgroundColor: "#C7C7C7", my: "10px" }} />
        </Box>

        {/* Live site link */}
        <Typography
          component="a"
          href={liveSiteLink}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            position: "relative", // Position relative for the pseudo-element
            color: "#D3E97A",
            textDecoration: "none", // Remove default underline
            fontWeight: 600,
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "5px", // Spacing between text and icon
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
          VIEW LIVE SITE
          <ArrowOutwardIcon className="hoverIcon" sx={{ fontSize: "20px" }} />
        </Typography>
      </Box>
    </Box>
  );
};

// Main Projects component (editable props)
const Projects: React.FC = () => {
  const projectData: ProjectProps[] = [
    {
      thumbnail: "/assets/images/turfind.png",
      projectTitle: "Turfind",
      caption: [
        "Developed a secure end-to-end real estate payment system with escrow services to protect transactions.",
        "Engineered a dynamic marketplace for property listings and integrated 3D virtual tours.",
        "Implemented a robust chat feature for direct communication between buyers and sellers, ensuring real-time interaction.",
      ],
      client: "Turfind",
      period: "February 2023 - Present",
      role: "Mobile Developer",
      liveSiteLink: "https://turfind.homes/",
    },

    {
      thumbnail: "/assets/images/fuel-alert.png",
      projectTitle: "Fuel Alert",
      caption: [
        "Developed a mobile application for users to compare prices, receive real-time alerts, and earn rewards by contributing to their communities",
      ],
      client: "Fuel Alert",
      period: "July 2024",
      role: "Mobile Developer",
      liveSiteLink: "https://www.fuelalertng.com/",
    },

    {
      thumbnail: "/assets/images/foodnify.png",
      projectTitle: "Foodnify",
      caption: [
        "Developed an all-in-one mobile application which enables users to learn how to make your favorite meals, share recipes, order homemade food and meet great chefs and caterers.",
      ],
      client: "Foodnify",
      period: "December 2023 - Present",
      role: "Mobile Developer",
      liveSiteLink: "https://www.foodnify.com/",
    },
  ];

  return (
    <Box>
      <Typography
        sx={{
          fontFamily: "Manrope",
          fontWeight: 400,
          fontSize: { xs: "14px", md: "18px" },
          color: "#C7C7C7",
          mt: "32px",
        }}
      >
        Let's get right into it!
      </Typography>

      <Typography
        sx={{
          marginBottom: "20px",
          fontFamily: "Bebas Neue",
          fontWeight: 400,
          fontSize: { xs: "48px", md: "76px" },
          color: "#FFFFFF",
        }}
      >
        Featured Projects
      </Typography>

      {/* Map over project data and render ProjectCard components */}
      {projectData.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </Box>
  );
};

export default Projects;
