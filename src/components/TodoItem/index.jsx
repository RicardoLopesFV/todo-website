import { FaCheck, FaPen } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa6";
import "./index.scss";

export const TodoItem = ({ task, onExcluir, onCheckComplete }) => {
  const itemClassName = `todo-item ${
    task.isComplete ? "todo-item--complete" : ""
  }`;

  const checkButtonClassName = `todo-item__left-side__check-button ${
    task.isComplete ? "todo-item__left-side__check-button--complete" : ""
  }`;

  const spanClassName = `todo-item_left-side__text ${
    task.isComplete ? "todo-item__left-side__text--complete" : ""
  }`;

  return (
    /*
      ! DIDÁTICA: (MUITO IMPORTANTE!) Por que usamos () => ... ?
      
      * 1- Se escrevêssemos onClick={onExcluir(tarefa.id)}, a função seria EXECUTADA assim que o componente aparecesse na tela! (E isso causaria um loop infinito de exclusão).
      
      # 2- Nós precisamos "envelopar" a chamada em outra função (uma "arrow function").
        * onClick={() => onExcluir(tarefa.id)}.
      
      * 3- Isso diz ao React: "Quando o clique acontecer, execute esta arrow function, que por sua vez vai chamar a função 'onExcluir' com o 'id' correto."
    */
    <li className={itemClassName.trim()}>
      <div className="todo-item__left-side">
        <button
          className={checkButtonClassName.trim()}
          onClick={() => onCheckComplete(task.id)}
        >
          <FaCheck />
        </button>
        <span className={spanClassName.trim()}>{task.text}</span>
      </div>
      <div className="todo-item__right-side">
        {/* <button className="todo-item__right-side__delete-button">
          <FaPen />
        </button> */}
        <button
          className="todo-item__right-side__delete-button"
          onClick={() => onExcluir(task.id)}
        >
          <FaTrash />
        </button>
      </div>
    </li>
  );
};
