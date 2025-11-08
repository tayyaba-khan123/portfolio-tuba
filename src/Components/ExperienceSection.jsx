import React from "react";
import "./ExperienceSection.css";

export  default function ExperienceSection() {
  return (
    <section className="experience-section">
      <h2 className="experience-title">My Experience</h2>

      <div className="experience-card">
        <h3>Front-End Web Development</h3>
        <p className="exp-duration">2025 - Present</p>

        <p className="exp-text">
          I have completed my front-end development training where I learned how to create
          responsive websites using HTML, CSS, JavaScript and React. During my learning journey,
          I built useful projects like a Todo App, Weather App and Counter App which helped me
          understand real website functionality.
        </p>

        <p className="exp-text">
          Along with technical skills, I also completed a certificate in Soft and Employability Skills
          which improved my communication, teamwork, and problem-solving abilities.
        </p>

        <ul className="exp-list">
          <li>Developed responsive web pages and components using React.</li>
          <li>Created Todo, Weather and Counter applications as practice projects.</li>
          <li>Learned to integrate APIs and handle user interactions.</li>
          <li>Practiced UI/UX basics for clean and simple interfaces.</li>
          <li>Improved teamwork, communication and time management skills.</li>
        </ul>
      </div>
    </section>
  );
}