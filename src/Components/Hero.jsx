import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import "./Hero.css";

export default function Hero() {

  const navigate = useNavigate();  // ✅ Navigation hook

  useEffect(() => {
    const textElement = document.querySelector(".typing-text");
    const words = ["Frontend Developer", "React Developer", "UI/UX Designer"];
    let index = 0;

    setInterval(() => {
      textElement.textContent = words[index];
      index = (index + 1) % words.length;
    }, 4000);
  }, []);

  return (
    <section className="hero-section">

      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span>Tuba Mushtaq</span>
        </h1>

        <h2 className="hero-typing">
          <span className="typing-text"></span>
        </h2>

        <p className="hero-text">
          A passionate Front-End Developer creating clean and modern UI/UX experiences.
        </p>

        {/* ✅ Button now opens Blogs page */}
        <button 
          className="hero-btn"
          onClick={() => navigate("/Blogs")}
        >
          Explore My Work
        </button>
      </div>

      <div className="hero-image">
        <img src="image.jpeg2" alt="Profile" />
      </div>

    </section>
  );
}