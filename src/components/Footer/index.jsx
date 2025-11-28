import { FaLinkedin, FaGithub } from "react-icons/fa6";
import "./index.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">
          &copy; {currentYear} Todo App. Developed with ❤️ by{" "}
          <strong>Ricardo</strong>.
        </p>
      </div>
    </footer>
  );
};
