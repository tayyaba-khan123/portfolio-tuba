import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* ✅ Left */}
        <div className="footer-left">
          <h2 className="footer-logo">Tuba Mushtaq</h2>
          <p className="footer-text">
            Front-End Developer creating clean and responsive web experiences.
          </p>
        </div>

        {/* ✅ Center - Quick Links */}
        <div className="footer-center">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">
                <span className="material-icons icon">home</span> Home
              </a>
            </li>

            <li>
              <a href="/about">
                <span className="material-icons icon">person</span> About
              </a>
            </li>

            <li>
              <a href="/projects">
                <span className="material-icons icon">work</span> Projects
              </a>
            </li>

            <li>
              <a href="/contact">
                <span className="material-icons icon">mail</span> Contact
              </a>
            </li>
          </ul>
        </div>

        {/* ✅ Right - Social */}
        <div className="footer-right">
          <h3>Social</h3>
          <ul>
            <li>
              <a href="#">
                <span className="material-icons icon">public</span> Portfolio
              </a>
            </li>

            <li>
              <a href="#">
                <span className="material-icons icon">thumb_up</span> Facebook
              </a>
            </li>

            <li>
              <a href="#">
                <span className="material-icons icon">photo_camera</span> Instagram
              </a>
            </li>

            <li>
              <a href="#">
                <span className="material-icons icon">business_center</span> LinkedIn
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Tuba Mushtaq | All Rights Reserved</p>
      </div>

    </footer>
  );
}