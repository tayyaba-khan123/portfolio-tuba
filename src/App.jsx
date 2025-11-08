import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";
import ContactForm from "./Components/ContactForm";
import ExperienceSection from "./Components/ExperienceSection";
import MyEducation from "./Components/MyEducation";
import SkillsSection from "./Components/SkillsSection";
import Weather from "./Components/Weather";
import Todo from "./Components/Todo";
import Counter from "./Components/Counter";

import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Blogs from "./Pages/Blogs";
import About from "./Pages/About";

import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />

          {/* Projects */}
          <Route path="/projects" element={<Projects />} />

          {/* Project Pages */}
          <Route path="/weather" element={<Weather />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}