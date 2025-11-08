import React from "react";
import ContactForm from "../Components/ContactForm"; // ✅ Correct import
import "./Contact.css";  // ✅ Your main contact page CSS

export default function Contact() {
  return (
<section className="contact-page">
  <h2 className="contact-title">Contact Me</h2>
  <p className="contact-subtitle">Feel free to reach out anytime.</p>

  {/* ✅ Add this wrapper */}
  <div className="contact-content">

      <ContactForm />   {/* ✅ Left side */}

      {/* ✅ Right side details */}
      <div className="contact-details">

        <div className="detail-box">
          <span className="material-icons detail-icon">phone</span>
          <div>
            <h4>Phone</h4>
            <p>+92 3276561847</p>
          </div>
        </div>

        <div className="detail-box">
          <span className="material-icons detail-icon">email</span>
          <div>
            <h4>Email</h4>
            <p>tubamushtaq156@gmail.com</p>
          </div>
        </div>

        <div className="detail-box">
          <span className="material-icons detail-icon">location_on</span>
          <div>
            <h4>Location</h4>
            <p>Pakistan</p>
          </div>
        </div>

      </div>
  </div>

</section>
  );
}