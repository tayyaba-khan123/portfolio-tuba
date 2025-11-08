import React, { useState } from "react";
import Todo from "./Todo";
import Weather from "./Weather";
import Counter from "./Counter";
import "./Projects.css";

export default function Projects() {
  const [activeProject, setActiveProject] = useState("");

  const handleOpen = (id) => {
    setActiveProject(id);

    setTimeout(() => {
      window.scrollTo({ top: 600, behavior: "smooth" });
    }, 200);
  };

  const projects = [
    {
      id: "todo",
      title: "✅ Todo App",
      desc: "Manage your daily tasks with add and delete functionality.",
      img: "image.jpeg8",
    },
    {
      id: "weather",
      title: "🌤️ Weather App",
      desc: "Get weather details of any city using live API.",
      img: "image.jpeg6",
    },
    {
      id: "counter",
      title: "🔢 Counter App",
      desc: "Simple counter with increment, decrement & reset.",
      img: "image.jpeg3",
    },
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>

      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p.id} className="project-card">
            <img src={p.img} alt={p.title} className="project-img" />

            <h2>{p.title}</h2>
            <p>{p.desc}</p>

            <button
              className="open-btn"
              onClick={() => handleOpen(p.id)}   // ✅ Only button opens project
            >
              Open Project
            </button>
          </div>
        ))}
      </div>

      {/* Output Section */}
      <div className="project-output">
        {activeProject === "todo" && <Todo />}
        {activeProject === "weather" && <Weather />}
        {activeProject === "counter" && <Counter />}
      </div>
    </div>
  );
}