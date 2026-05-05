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
          <Route path="/about" element={<div className="pt-28 pb-24"><About /></div>} />
          <Route path="/projects" element={<div className="pt-28 pb-24"><Projects /></div>} />
          <Route path="/contact" element={<div className="pt-28 pb-24 flex items-center justify-center"><Contact /></div>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}
