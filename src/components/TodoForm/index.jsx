import { useState } from "react";
import "./index.scss";

export const TodoForm = ({ onAddTask }) => {
  /*
    ! -- DIDÁTICA: O que é 'useState'? --
      * 1- É o "gancho" (Hook) do React para dar "memória" a um componente.
      
      # 2- const [valor, setValor] = useState(valorInicial);
        * - 'valor': É a variável que guarda o estado (a memória).
        * - 'setValor': É a *única função* que você pode usar para *mudar* o 'valor'.
        * - (Se você tentar fazer 'valor = "novo"', o React não vai redesenhar a tela!)
  */

  // ! Criando um estado que serve como memória do valor do input.
  const [textInput, setTextInput] = useState("");

  // ! Esta é a função que será disparada toda vez que ocorrer qualquer mudança no valor do input.
  const handleInputChange = (event) => {
    // * Pegamos o valor atual.
    const newText = event.target.value;

    // * Usamos a função especial pra atualizar o valor antigo pelo atual.
    setTextInput(newText);
  };

  // ! Criando a função que dispara quando o formulário é enviado (clique no botão ou enter).
  const handleSubmit = (event) => {
    // * Impede o HTML de recarregar a página (comportamento padrão).
    event.preventDefault();

    // * Primeiro vamos verificar se o input do usuário veio vazio.
    // ! O trim() remove espaços em branco no início e no fim.
    if (textInput.trim() === "") {
      window.alert("[ERROR] Empty task name!");
      return;
    }
    // ! Aqui nós usamos a função que o gerente "App" passou via props.
    // * Estamos enviando o valor de "textInput" para o "App", assim ele consegue gerenciar as tarefas.
    onAddTask(textInput);

    // * Depois que o formulário é enviado limpamos o campo de texto.
    setTextInput("");
  };

  return (
    // Formulário com os campos.
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className="todo-form__input"
        type="text"
        placeholder="Name your task..."
        value={textInput} // * Esse valor é controlado pelo "estado".
        onChange={handleInputChange} // ! Toda vez que o usuário mudar qualquer caractere essa função é disparada. (apagar ou escrever algo novo)
      />
      <button className="todo-form__button" type="submit">
        Add
      </button>
    </form>
  );
};
