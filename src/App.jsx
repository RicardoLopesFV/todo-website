import { Routes, Route } from "react-router-dom";
import { TodoApp } from "./pages/TodoApp";
import { Home } from "./pages/Home";

export const App = () => {
  return (
    <Routes>
      {/* # Rota raiz:
       * Quando o usuário acessar "/", mostramos o componente <Home />.
       */}
      <Route path="/" element={<Home />} />
      <Route path="/TodoApp" element={<TodoApp />} />
    </Routes>
  );
};
