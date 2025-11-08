import React from "react";
import SkillsSection from "../Components/SkillsSection";
import MyEducation from "../Components/MyEducation";

import ExperienceSection from "../Components/ExperienceSection";

import "./About.css";

export default function About() {
  return (
    <section className="about-page">

      <h2 className="about-title">About Me</h2>
      <p className="about-subtitle">
        A passionate Front-End Developer from Pakistan 💙
      </p>

      {/* Main About Section */}
      <div className="about-container">
        
        {/* Left Image */}
        <div className="about-image-box">
          <img src="image.jpeg5" alt="About" className="about-image" />
        </div>

        {/* Right Details */}
        <div className="about-text-box">
          <h3 className="about-heading">I'm Tuba Mushtaq</h3>
          <p className="about-text">
            I am a dedicated Front-End Developer with strong skills in 
            HTML, CSS, JavaScript, and React. I enjoy creating beautiful, 
            responsive and user-friendly websites.  
          </p>

          <p className="about-text">
            I have completed multiple web projects like Todo App, Weather App, 
            and Counter App during my web development learning journey.
            I also hold a certificate in 
            <strong> Soft & Employability Skills for Professionals.</strong>
          </p>

          <p className="about-text">
            My goal is to build modern, fast, and visually clean websites,
            and continue improving my development skills every day.
          </p>

        </div>
      </div>
<SkillsSection />
<MyEducation />
<ExperienceSection />
    </section>
  );
}
