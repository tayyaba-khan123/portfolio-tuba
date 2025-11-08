import React from "react";
import Projects from "../Components/Projects"; // ✅ Call Projects here
import "./Blogs.css";

export default function Blogs() {
  return (
    <section className="blogs-page">

      <h2 className="blogs-title">Blogs & Projects</h2>
      <p className="blogs-subtitle">
        Thoughts, journey, and inspirations from my development life.
      </p>

      {/* ✅ Blog Section Card */}
      <div className="blog-card">

        <h3 className="blog-heading">My Journey in Front-End Development</h3>
        <p className="blog-text">
          Becoming a front-end developer has been an amazing experience for me.
          I started with simple HTML & CSS and slowly moved towards JavaScript 
          and React. Every project I created helped me understand design, 
          responsiveness, and clean coding habits.
        </p>

        <h3 className="blog-heading">What I Love About Coding</h3>
        <p className="blog-text">
          Coding gives me the power to turn ideas into real interactive 
          experiences. I enjoy creating smooth, beautiful and modern UI that 
          users love. React has become my favorite framework because it makes 
          everything fast, organized and powerful.
        </p>
      </div>

      {/* ✅ Projects Section */}
      <h2 className="blogs-title" style={{ marginTop: "3rem" }}>
      </h2>

      <Projects /> {/* ✅ PROJECTS CALLED HERE */}

    </section>
  );
}