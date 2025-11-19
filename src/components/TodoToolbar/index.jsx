import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import "./index.scss";

export const TodoToolbar = ({
  searchInputText,
  setSearchInputText,
  onOpenModal,
}) => {
  return (
    <div className="todo-toolbar">
      <div className="todo-toolbar__search">
        <FaSearch className="todo-toolbar__search-icon" />
        <input
          type="text"
          placeholder="Search tasks"
          className="todo-toolbar__search-input"
          value={searchInputText}
          /*
           * Toda vez que o usuário digitar, apagar ou mudar sua pesquisa, o estado vai mudar e armazenar essa mudança.
           */
          onChange={(event) => setSearchInputText(event.target.value)}
        />
      </div>

      <button
        className="todo-toolbar__add-button"
        /*
         * Botão pra abrir a janela de criação de tarefa
         */
        onClick={onOpenModal}
      >
        <FaPlus />
      </button>
    </div>
  );
};
