import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Container } from "@mui/material";
import { About, Projects, Contact } from "./components/Navlinks";
import Hero from "./components/Hero";

const App: React.FC = () => {
  return (
    <Router>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1330px",
          margin: "0 auto",
          padding: "0 16px",
        }}
      >
        <NavBar />
        <Hero />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
