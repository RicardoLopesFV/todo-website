import { Routes, Route } from "react-router-dom";
// # Toaster é de uma biblioteca chamada "sonner", com ela podemos implementar notificações flutuantes (Toasts).
import { Toaster } from "sonner";
import { TodoApp } from "./pages/TodoApp";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";

export const App = () => {
  return (
    <>
      {/* # Adicionando Toaster fora das rotas */}
      <Toaster position="top-center" richColors />

      <Routes>
        {/* # Rota raiz:
         * Quando o usuário acessar "/", mostramos o componente <Home />.
         */}
        <Route path="/" element={<Home />} />
        <Route path="/TodoApp" element={<TodoApp />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
};
