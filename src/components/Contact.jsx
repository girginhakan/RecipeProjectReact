import React, { useContext, useState } from "react";
import "../assets/style/contact.scss";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import DataContext from "../context/DataContext";
const Contact = () => {
  const {
    fullName,
    email,
    message,
    phone,
    isPopupVisible,
    setFullName,
    setEmail,
    setMessage,
    setPhone,
    handleSubmitMessage
  } = useContext(DataContext);

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>
        If you have any questions or want to reach out to us, you can fill out
        the form below.
      </p>

      <div className="contact-form">
        <form onSubmit={handleSubmitMessage}>
          <label htmlFor="name">Name:</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            type="text"
            id="name"
            name="name"
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            name="email"
            required
          />

          <label htmlFor="phone">Phone:</label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            id="phone"
            name="phone"
          />

          <label htmlFor="message">Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            id="message"
            name="message"
            rows="5"
            required
          ></textarea>

          <button type="submit">Send</button>
        </form>
        {isPopupVisible && (
          <div className="popup">
            <p>Thanks. Your message has been sent to the authorities.</p>
          </div>
        )}
      </div>

      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>
          <strong>Address:</strong> Ankara Teknoloji Geliştirme Bölgesi, G Blok,
          Üniversiteler Mahallesi Beytepe Lodumlu Köy Yolu Caddesi No:91, 06800
          Çankaya/Ankara
        </p>
        <p>
          <strong>Phone:</strong> +90 123 456 78 90
        </p>
        <p>
          <strong>Email:</strong> hakan@hakan.com
        </p>
        <h2>Our Location</h2>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24497.323838812765!2d32.72265605482586!3d39.87053107806257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d3471a8e2b618d%3A0x73f8bb3f0acf48d!2sBilgeAdam%20Teknoloji%20Ankara!5e0!3m2!1str!2str!4v1721328127236!5m2!1str!2str"
          width="700"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="social-media">
        <h2>Follow Us</h2>
        <div className="social-links">
          <a
            href="https://www.facebook.com/hakan.girgin.37/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook color="#3b5998" />
          </a>
          <a
            href="https://x.com/Hakan_girgin24"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://www.instagram.com/hakangirgin24/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
