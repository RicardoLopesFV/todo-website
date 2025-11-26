import { Routes, Route } from "react-router-dom";
import { TodoApp } from "./pages/TodoApp";

export const App = () => {
  return (
    <Routes>
      {/* # Rota raiz:
            * Quando o usuário acessar "/", mostramos o componente <TodoApp />.
            TODO: Futuramente mudar pra Home.
      */}
      <Route path="/" element={<TodoApp />} />
    </Routes>
  );
};
