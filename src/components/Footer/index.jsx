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
        <ul className="footer__socials-list">
          <li className="footer__socials-item">
            <a
              className="footer__socials-link footer__socials-link--linkedin"
              href="https://www.linkedin.com/in/ricardolopesfv/"
              target="blank"
              rel="noopener noreferrer"
              aria-label="Link para o Linkedin"
            >
              <FaLinkedin />
            </a>
          </li>
          <li className="footer__socials-item">
            <a
              className="footer__socials-link footer__socials-link--github"
              href="https://github.com/RicardoLopesFV"
              target="blank" // ? Abre uma nova aba
              rel="noopener noreferrer" // ? Segurança
              aria-label="Link para o Github"
            >
              <FaGithub />
            </a>
          </li>
          <li className="footer__socials-item"></li>
        </ul>
      </div>
    </footer>
  );
};
