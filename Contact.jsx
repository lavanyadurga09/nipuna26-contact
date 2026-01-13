import React, { useState } from "react";
import "./Contact.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="contact-page">
      {/* HERO / NAV */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>Home / Contact</p>
      </section>

      {/* INFO CARDS */}
      <section className="contact-info">
        <a href="tel:+918309965388" className="info-card">
          <FaPhoneAlt className="icon" />
          <h4>Call</h4>
          <p>+91 8309965388</p>
        </a>

        <a href="mailto:iste@srkrec.ac.in" className="info-card">
          <FaEnvelope className="icon" />
          <h4>Email</h4>
          <p>iste@srkrec.ac.in</p>
        </a>

        <a
          href="https://maps.google.com/?q=SRKR Engineering College Bhimavaram"
          target="_blank"
          rel="noreferrer"
          className="info-card"
        >
          <FaMapMarkerAlt className="icon" />
          <h4>Address</h4>
          <p>SRKR Engineering College, Bhimavaram</p>
        </a>
      </section>

      {/* FORM + MAP */}
      <section className="contact-main">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send us a Message</h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>

        <div className="contact-map">
          <iframe
            title="SRKR Map"
            src="https://www.google.com/maps?q=SRKR%20Engineering%20College&output=embed"
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="contact-footer">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaTwitter /></a>
        </div>
        <p>© 2026 SRKR ISTE. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
