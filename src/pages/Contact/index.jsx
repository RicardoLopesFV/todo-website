import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaDiscord,
  FaEnvelope,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa6";
import "./index.scss";

export const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <Link to="/TodoApp" className="back-btn">
          <FaArrowLeft /> Back
        </Link>

        <div className="contact-header">
          <h1>
            Let's Connect<span className="dot">.</span>
          </h1>
          <p>
            Have a question, a project idea, or just want to say hi? Feel free
            to reach out on any of these platforms.
          </p>
        </div>
        <div className="contact-links">
          {/* # EMAIL */}
          <a
            href="mailto:ricardolopesprog@gmail.com"
            className="contact-btn email"
          >
            <div className="icon-box">
              <FaEnvelope />
            </div>
            <div className="info">
              <span className="label">E-mail</span>
              <div className="value">ricardolopesprog@gmail.com</div>
            </div>
          </a>

          {/* # LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/ricardolopesfv/"
            target="_blank"
            rel="noreferrer"
            className="contact-btn linkedin"
          >
            <div className="icon-box">
              <FaLinkedin />
            </div>
            <div className="info">
              <span className="label">LinkedIn</span>
              <span className="value">Professional Profile</span>
            </div>
          </a>

          {/* # WHATSAPP */}
          <a
            href="https://wa.me/+5541984470316"
            target="_blank"
            rel="noreferrer"
            className="contact-btn whatsapp"
          >
            <div className="icon-box">
              <FaWhatsapp />
            </div>
            <div className="info">
              <span className="label">WhatsApp</span>
              <span className="value">Chat with me</span>
            </div>
          </a>

          {/* # DISCORD */}
          <a
            href="https://discord.com/users/ricardolopesfv"
            target="_blank"
            rel="noreferrer"
            className="contact-btn discord
          "
          >
            <div className="icon-box">
              <FaDiscord />
            </div>
            <div className="info">
              <span className="label">Discord</span>
              <span className="value">Add me on discord</span>
            </div>
          </a>
        </div>
        <footer className="contact-footer">
          <p>© {new Date().getFullYear()} Ricardo Lopes. Manaus, Brazil.</p>
        </footer>
      </div>
    </div>
  );
};
