import { FaCheck, FaPen } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa6";
import "./index.scss";
import { useEffect, useRef, useState } from "react";
import { FaSave, FaTimes } from "react-icons/fa";

export const TodoItem = ({
  task,
  onDeleteTasks,
  onEditTasks,
  onToggleComplete,
}) => {
  const isComplete = task.isComplete;

  // ! --- ESTADOS LOCAIS PARA EDIÇÃO ---
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  // ! Usando UseRef para focar no input quando abrir a edição.
  const inputRef = useRef(null);

  // ! Função para focar no input quando abrir a edição.
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  // ! Função para salvar.
  const handleSave = () => {
    if (editedText.trim() !== "") {
      onEditTasks(task.id, editedText);
      setIsEditing(false);
    }
  };

  // ! Função para cancelar (volta ao texto original).
  const handleCancel = () => {
    setEditedText(task.text);
    setIsEditing(false);
  };

  // ! Função para salvar ao apertar Enter.
  const handleKeyDown = (event) => {
    if (event === "Enter") handleSave();
    if (event === "Escape") handleCancel();
  };

  // ! Classes dinâmicas.
  const itemClassName = `todo-item ${isComplete ? "todo-item--complete" : ""} ${
    isEditing ? "todo-item--editing" : ""
  }`;

  const checkButtonClassName = `todo-item__left-side__check-button ${
    isComplete ? "todo-item__left-side__check-button--complete" : ""
  }`;

  const spanClassName = `todo-item__left-side__text ${
    isComplete ? "todo-item__left-side__text--complete" : ""
  }`;

  /*
    ! DIDÁTICA: (MUITO IMPORTANTE!) Por que usamos () => ... ?
    
    * 1- Se escrevêssemos onClick={onDeleteTasks, onEditTasks(tarefa.id)}, a função seria EXECUTADA assim que o componente aparecesse na tela! (E isso causaria um loop infinito de exclusão).
    
    # 2- Nós precisamos "envelopar" a chamada em outra função (uma "arrow function").
      * onClick={() => onDeleteTasks, onEditTasks(tarefa.id)}.
    
    * 3- Isso diz ao React: "Quando o clique acontecer, execute esta arrow function, que por sua vez vai chamar a função 'onDeleteTasks, onEditTasks' com o 'id' correto."
  */

  return (
    <li className={itemClassName.trim()}>
      <div className="todo-item__left-side">
        {/* * Botão de check só aparece quando isEditing = false */}
        {!isEditing && (
          <button
            className={checkButtonClassName.trim()}
            onClick={() => onToggleComplete(task.id)}
          >
            <FaCheck />
          </button>
        )}
        {/* * Se isEditing for true, mostra Input, senão mostra o texto */}
        {isEditing ? (
          <input
            ref={inputRef}
            type="text"
            className="todo-item__left-side__edit-input"
            value={editedText}
            onChange={(event) => setEditedText(event.target.value)}
            onKeyDown={handleKeyDown}
          />
        ) : (
          <span className={spanClassName.trim()}>{task.text}</span>
        )}
      </div>
      <div className="todo-item__right-side">
        {/* * Botões mudam dependendo do modo. */}
        {isEditing ? (
          <>
            <button
              className="todo-item__right-side__action-btn todo-item__right-side__action-btn--save-btn"
              onClick={handleSave}
            >
              <FaSave />
            </button>
            <button
              className="todo-item__right-side__action-btn todo-item__right-side__action-btn--cancel-btn"
              onClick={handleCancel}
            >
              <FaTimes />
            </button>
          </>
        ) : (
          <>
            {/* Só permite editar se não estiver completa */}
            {!isComplete && (
              <button
                className="todo-item__right-side__action-btn todo-item__right-side__action-btn--edit-btn"
                onClick={() => setIsEditing(true)}
              >
                <FaPen />
              </button>
            )}
            <button
              className="todo-item__right-side__action-btn todo-item__right-side__action-btn--delete-btn"
              onClick={() => onDeleteTasks(task.id)}
            >
              <FaTrash />
            </button>
          </>
        )}
      </div>
    </li>
  );
};
