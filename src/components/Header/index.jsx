import { Link } from "react-router-dom";
import "./index.scss";

export const Header = () => {
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
              <Link to="/Contact" className="header__nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
