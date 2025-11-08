import React from "react";
import "./Details.css";

export default function Detail() {
  return (
    <section className="details-section">
      <h2 className="details-title">What I Do</h2>

      <div className="details-grid">

        <div className="detail-card">
          <h3>Web Development</h3>
          <p>I build responsive and modern websites with clean UI and smart UX.</p>
        </div>

        <div className="detail-card">
          <h3>React Projects</h3>
          <p>I create dynamic and component-based applications using ReactJS.</p>
        </div>

        <div className="detail-card">
          <h3>Problem Solving</h3>
          <p>I enjoy solving coding problems and optimizing performance.</p>
        </div>

      </div>
    </section>
  );
}