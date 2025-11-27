import { Link } from "react-router-dom";
import { FaLayerGroup, FaRocket } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import "./index.scss";

export const Home = () => {
  return (
    <div className="home">
      <div className="home__content">
        <header className="home__header">
          <div className="logo">
            TodoApp
            <span className="dot">.</span>
          </div>
          <nav>
            <ul>
              <li className="nav-item">
                <a href="#">Sobre</a>
              </li>
              <li className="nav-item">
                <Link to="/TodoApp" className="nav-btn">
                  Entrar
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="home__main">
          <section className="hero-section">
            <h1>
              Organize suas idéias. <br />
              Realize seus <span className="highlight">objetivos.</span>
            </h1>
            <p className="hero-text">
              A simplicidade que você precisa para focar no que realmente
              importa. Sem distrações, apenas produtividade pura.
            </p>

            <div className="cta-group">
              {/*
                # Porque usar <Link> do React Router e não <a>?
                  * A tag <a> recarrega a página inteira (o que é lento e "pisca" a tela).

                  * O <Link> troca apenas o conteúdo da tela instantaneamente (SPA - Single Page Application).
              */}
              <Link to="/TodoApp" className="btn-primary">
                Começar Agora
              </Link>
              <a
                href="https://github.com/RicardoLopesFV/todo-website"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                Ver no Github
              </a>
            </div>
          </section>
          <section className="features-section">
            <div className="feature-card">
              <FaRocket className="icon" />
              <h3>Rápido & Fluido</h3>
              <p>
                Carregamento instantâneo para você não perder tempo esperando.
              </p>
            </div>
            <div className="feature-card">
              <FaLayerGroup className="icon" />
              <h3>Organização Visual</h3>
              <p>
                Interface limpa que ajuda seu cérebro a processar melhor as
                tarefas.
              </p>
            </div>
            <div className="feature-card">
              <FaCheckCircle className="icon" />
              <h3>Foco Total</h3>
              <p>
                Desenvolvido pensando em eliminar o ruído visual do seu dia a
                dia.
              </p>
            </div>
          </section>
        </main>
        <footer className="home__footer">
          <p>
            &copy; {new Date().getFullYear()} TodoApp. Developed with ❤️ by{" "}
            <strong>Ricardo</strong>.
          </p>
        </footer>
      </div>
    </div>
  );
};
