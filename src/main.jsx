/*
  ! Primeiro projeto React que estou fazendo para aprender e documentar tudo que eu achar necessário pra mim aprender de uma vez por TODAS!!!
*/
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
/*
  Aqui eu importo o App usando "{}" pq estou escrevendo o componente desta forma:
  "export const App = () => { ...".

*/
import { App } from "./App.jsx";
/*
  Se por um acaso fosse uma função normal com "export default" no final, ficaria assim:
  "import App from "./App.jsx"".
*/
import "./styles/main.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
