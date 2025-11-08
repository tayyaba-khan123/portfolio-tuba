import React from "react";
import "./SkillsSection.css";

export default function SkillsSection() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React JS",
    "Responsive Design",
    "Git & GitHub",
    "API Integration",
    "UI/UX Basics",
    "Communication Skills",
    "Inpage",
    "MicroSoft Office",
    "Teamwork & Collaboration",
    "Problem Solving",
    "Time Management"
  ];

  return (
    <section className="skills-section">
      <h2 className="skills-title">My Skills</h2>

      <p className="skills-intro">
        I have learned and practiced different front-end development skills during my web development
        training. These skills help me build clean, responsive and user-friendly websites.
      </p>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-box" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}