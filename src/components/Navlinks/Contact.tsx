import React from "react";
import {
  Box,
  Link,
  Typography,
  TextField,
  Button,
  styled,
  useTheme,
  useMediaQuery,
} from "@mui/material";

// Custom label component
const Label: React.FC<{ text: string }> = ({ text }) => {
  return (
    <Typography
      sx={{
        fontFamily: "Manrope",
        fontSize: "16px",
        fontWeight: 500,
        color: "#C7C7C7",
        mb: 1,
      }}
    >
      {text}
    </Typography>
  );
};

const SocialLinks = styled("img")({
  objectFit: "contain",
  display: "block",
  width: "auto",
  height: "auto",
  padding: "20px",
  cursor: "pointer",
});

// Styled TextField component
const CustomTextField = styled(TextField)({
  backgroundColor: "#1A1A1A",
  marginBottom: "16px",
  borderRadius: "4px",
  input: { color: "#FFF" },
  textarea: { color: "#FFF" },

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#000",
      borderWidth: "1.5px",
      borderRadius: "8px",
    },
    "&:hover fieldset": {
      borderColor: "#000",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#000",
    },
  },
});

const Contact: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? 3 : 5,
          paddingX: isMobile ? "2%" : "5%",
        }}
      >
        {/* Contact info */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: isMobile ? "100%" : "50%",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Bebas Neue",
              fontSize: isMobile ? "48px" : "76px",
              fontWeight: 400,
              color: "#FFFFFF",
            }}
          >
            Let’s connect
          </Typography>

          <Typography
            sx={{
              fontFamily: "Manrope",
              fontSize: isMobile ? "16px" : "20px",
              fontWeight: 400,
              lineHeight: isMobile ? "22px" : "27.32px",
              color: "#B3B3B3",
            }}
          >
            Have some big idea or brand to develop and need help? Then reach out
            we'd love to hear about your project and provide help.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: isMobile ? "16px" : "18px",
                  fontWeight: 400,
                  lineHeight: isMobile ? "21px" : "27px",
                  color: "#B3B3B3",
                }}
              >
                Say hello at
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  pt: 3,
                }}
              >
                <Link
                  sx={{
                    fontFamily: "Manrope",
                    fontSize: isMobile ? "16px" : "18px",
                    fontWeight: 400,
                    lineHeight: isMobile ? "21px" : "27px",
                    color: "#FFFFFF",
                    textDecoration: "none",
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      width: "0",
                      height: "2px",
                      bottom: "-2px",
                      left: "0",
                      backgroundColor: "#D3E97A",
                      transition: "width 0.3s ease",
                    },
                    "&:hover::after": {
                      width: "100%",
                    },
                  }}
                >
                  bubaambore@gmail.com
                </Link>
                <Link
                  sx={{
                    fontFamily: "Manrope",
                    fontSize: isMobile ? "16px" : "18px",
                    fontWeight: 400,
                    lineHeight: isMobile ? "21px" : "27px",
                    color: "#FFFFFF",
                    textDecoration: "none",
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      width: "0",
                      height: "2px",
                      bottom: "-2px",
                      left: "0",
                      backgroundColor: "#D3E97A",
                      transition: "width 0.3s ease",
                    },
                    "&:hover::after": {
                      width: "100%",
                    },
                  }}
                >
                  +234 8187909619
                </Link>
              </Box>
            </Box>
          </Box>

          <Typography
            sx={{
              fontFamily: "Manrope",
              fontSize: isMobile ? "16px" : "18px",
              fontWeight: 400,
              lineHeight: isMobile ? "21px" : "27px",
              color: "#B3B3B3",
              mb: 3,
            }}
          >
            For more info, here’s my{" "}
            <Link
              href="https://docs.google.com/document/d/1IFbsc8D6tuv7o4zrPy92TuLFJe1PsHMquOw_e4QAOys/edit?tab=t.0"
              target="_blank"
              sx={{
                fontFamily: "Manrope",
                fontSize: isMobile ? "14px" : "18px",
                fontWeight: 400,
                lineHeight: isMobile ? "21px" : "27px",
                color: "#FFFFFF",
                textDecoration: "none",
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: "0",
                  height: "2px",
                  bottom: "-2px",
                  left: "0",
                  backgroundColor: "#D3E97A",
                  transition: "width 0.3s ease",
                },
                "&:hover::after": {
                  width: "100%",
                },
              }}
            >
              resume
            </Link>
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <a
              href="https://www.linkedin.com/in/gideon-buba-34aaa2190/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialLinks
                src="/assets/icons/linkedin-icon.svg"
                alt="LinkedIn"
              />
            </a>
            <a
              href="https://github.com/Gideon-Buba"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialLinks src="/assets/icons/github-icon.svg" alt="GitHub" />
            </a>
          </Box>
        </Box>

        {/* Form */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: isMobile ? "100%" : "50%",
            borderRadius: "10px",
            height: isMobile ? "auto" : "611px",
          }}
        >
          <Label text="Name" />
          <CustomTextField
            variant="filled"
            InputLabelProps={{ style: { display: "none" } }}
          />

          <Label text="Email" />
          <CustomTextField
            variant="filled"
            InputLabelProps={{ style: { display: "none" } }}
          />

          <Label text="Subject" />
          <CustomTextField
            variant="filled"
            InputLabelProps={{ style: { display: "none" } }}
          />

          <Label text="Message" />
          <CustomTextField
            multiline
            rows={4}
            variant="filled"
            InputLabelProps={{ style: { display: "none" } }}
          />

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#D3E97A",
              color: "#0A0A0A",
              fontFamily: "Manrope",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "27px",
              height: "54px",
              width: "140px",
              borderRadius: "100px",
              alignSelf: "left",
              mb: 10,
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
