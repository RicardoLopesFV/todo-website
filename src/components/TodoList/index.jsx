import { TodoItem } from "../TodoItem";
import "./index.scss";
/*
  ! Aqui vamos passar a função que o gerente "App.jsx" passou para o componente "TodoList", aqui usaremos desestruturação para pegar a prop. Então ao invés de escrevermos assim => "tasks" que é a "variável" da prop, nós escrevemos o que está dentro que é o "{tasks}".
*/
export const TodoList = ({ tasks, onExcluirTasks, onCheckComplete }) => {
  let listContent; // ? Definindo aqui para que possamos passar no return.

  /*
   * Apenas usando condicional para caso não tenha nenhuma tarefa para renderizar.
   */
  if (tasks.lenght === 0) {
    return (
      <p className="todo-list__empty-message">
        No tasks were found. Try to add one!
      </p>
    );
  } else {
    // * Aqui nós inserimos o conteúdo da "listContent" para ser renderizado.
    listContent = (
      <ul className="todo-list__list">
        {/*
          ! Aqui usamos o .map() para renderizarmos cada item da lista de objetos, a syntax é assim => array.map( (item) => ... )

          * Mapeando "tasks" para ver cada "task".
        */}
        {tasks.map((task) => (
          // * Agora cada item da lista terá esse formato na tela
          <TodoItem
            key={task.id}
            task={task}
            onExcluir={onExcluirTasks}
            onCheckComplete={onCheckComplete}
          />
        ))}
      </ul>
    );
  }

  return <div className="todo-list">{listContent}</div>;
};
