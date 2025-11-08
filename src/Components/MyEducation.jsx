import React from "react";
import "./MyEducation.css";

export default function MyEducation() {
  const education = [
    {
      degree: "Matric (Science)",
      year: "2021",
      institute: "Govt. High school School",
      details:
        "Completed Matric with Science subjects and performed excellently in academic studies."
    },
    {
      degree: "Intermediate (FSc Pre-Medical)",
      year: "2024",
      institute: "The Educator College Noorkot Road Shakargarh",
      details:
        "Studied Biology, Chemistry, and Physics. Built a strong understanding of scientific concepts and logical thinking."
    },
    {
      degree: "Web Development (Front-End)",
      year: "2025 - Present",
      institute: "Professional Training",
      details:
        "Started web development in 2025. Currently creating multiple projects using HTML, CSS, JavaScript, and React."
    },
    {
      degree: "BS Information Technology (Continue)",
      year: "2024 - Present",
      University: "The Education University (3rd Semester)",
      details:
        "Currently enrolled in BS IT and studying programming fundamentals, databases, object-oriented concepts, networking and modern computing technologies."
    }
  ];

  return (
    <section className="education-section">
      <h2 className="edu-title">My Education</h2>

      <div className="edu-list">
        {education.map((item, index) => (
          <div className="edu-card" key={index}>
            <div className="edu-header">
              <h3>{item.degree}</h3>
              <span className="edu-year">{item.year}</span>
            </div>

            <h4 className="edu-institute">{item.institute}</h4>
            <p className="edu-details">{item.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}