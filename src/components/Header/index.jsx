import { useState } from "react";
import "./index.scss";

export const Header = () => {
  // ! Criando estado pra armazenar qual link foi clicado e tem o modificador ativo.
  const [activeLink, setActiveLink] = useState("Home");

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
        <h1 className="header__title">Todo App</h1>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a
                className={`header__nav-link ${
                  /*
                      # Aqui está dizendo:
                        * Se o link ativo for o "About", então ele aplica o modificador "header__nav-link--active".
                    */
                  activeLink === "Home" && "header__nav-link--active"
                }`}
                href="#"
                onClick={() => setActiveLink("Home")}
              >
                Home
              </a>
            </li>
            <li className="header__nav-item">
              <a
                className={`header__nav-link ${
                  activeLink === "About" && "header__nav-link--active"
                }`}
                href="#"
                onClick={() => setActiveLink("About")}
              >
                About
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
