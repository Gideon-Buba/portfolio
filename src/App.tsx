import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import { About, Projects, Contact } from "./components/Navlinks";
import Hero from "./components/Hero";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import NavBar from "./components/NavBar";

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <Router>
      <Container
        maxWidth={false}
        className="main-background"
        sx={{
          maxWidth: "1330px",
          margin: "0 auto",
          padding: "0 16px",
        }}
      >
        <NavBar />
        {/* <Projects /> */}
        <Routes>
          {/* Route for Home page */}
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
