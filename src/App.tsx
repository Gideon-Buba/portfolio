import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { About, Projects, Contact } from "./components/Navlinks"
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import AnimatedCursorConfig from "./components/AnimatedCursorConfig"
import { BackgroundEffect } from "./components/BackgroundEffect"

export default function App() {
  return (
    <Router>
      <BackgroundEffect />
      <NavBar />
      <AnimatedCursorConfig />
      <div className="w-[90%] mx-auto">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}
