import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";

export const Header = () => {
  // ! Criando estado pra armazenar qual link foi clicado e tem o modificador ativo.
  const [activeLink, setActiveLink] = useState("");

  /*
    # Lá no "className" dos link onde eu coloco a lógica, seria quase a mesma coisa que se eu tivesse escrito assim: (JavaScript Puro)
      * if (activeLink === "About") {
      *   event.target.style.classList.toggle(header__nav-link--active);
      * }
    
    ! O React nos encoraja a pensar de forma declarativa (nós "declaramos" como o link deve ser, com base em um "estado").

    ! O JavaScript puro utiliza a forma imperativa(você "manda" o link mudar de cor).
  */

  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__title">
          TodoApp<span className="dot">.</span>
        </h1>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <Link to="/" className="header__nav-link">
                Home
              </Link>
            </li>
            <li className="header__nav-item">
              <a
                className={`header__nav-link ${
                  activeLink === "About" && "header__nav-link--active"
                }`}
                href="#"
                onClick={() => setActiveLink("About")}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
