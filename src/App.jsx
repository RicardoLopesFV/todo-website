import { useState } from "react";
import "./App.scss";
import { Header } from "./components/Header";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
/*
  ! Primeiro projeto React que estou fazendo para aprender e documentar tudo que eu achar necessário pra mim aprender de uma vez por TODAS!!!
*/

/*
 * Este é o componente principal onde todos os outros componentes menores se montam dentro do "App".
 */
export const App = () => {
  /*
    # Porque a lista de tarefas deve ficar no App.jsx? (Gerente)
      * Tanto o TodoForm quanto o TodoList precisam dessa lista, então o gerente "App" vai solicitar os nomes das tarefas e cria-las em uma lista.
      * O "App" irá passar a lista de tarefas para o TodoList, para que assim o TodoList possa mostrar na tela.
  */
  const [tasks, setTasks] = useState([]);

  const handleAddTasks = (tasksName) => {
    // * Agora criamos o objeto da tarefa
    const newTask = {
      id: crypto.randomUUID(), // ? Aqui geramos um ID único.
      text: tasksName,
      isComplete: false, // ? Por enquanto o valor inicial vai ser falso.
    };

    /* ! Entendendo a função que iremos passar para o setTasks.
      * 1- [ ...prevTarefas ]: Isso diz ao JavaScript: "Abra a lista prevTarefas e 'espalhe' (spread) todos os itens que estão dentro dela aqui."

      # 2- [...prevTarefas, newTask]: Isso cria uma LISTA NOVA que contém:
        * Uma cópia de todos os itens da lista antiga (...prevTarefas).
        * newTask adicionado no final.

      * 3- setTarefas( (prevTarefas) => ... ): Isso é uma "função de callback".
    */
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleDeleteTasks = (idToDelete) => {
    /*
      # Como remover um objeto de uma lista do jeito React?
        * 1- Ela recebe o 'id' da tarefa que precisa ser removida.
    
        * 2- Para excluir de forma "imutável", não usamos 'splice()'. Usamos o método '.filter()'.
      
        * 3- '.filter()' cria um NOVO array, mantendo apenas os itens que passarem no teste (onde o 'id' é DIFERENTE do 'id' que queremos excluir).
    */
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== idToDelete));
  };

  const handleCompleteTasks = (idToComplete) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id !== idToComplete) {
          return task;
        }

        return { ...task, isComplete: !task.isComplete };
      });
    });
  };

  // const handleEditTasks = (idToEdit) => {
  //   setTasks();
  // };
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        {/*
            # Agora vamos passar a função "handleAddTasks" para o componente TodoForm, e como vamos fazer isso?
              * Podemos passar por PROPS, e essa prop podemos nomear do jeito que quisermos, logo nomeamos como "onAddTask".
          */}
        <TodoForm onAddTask={handleAddTasks} />
        {/*
         * O "Gerente" agora entrega DUAS funções (props) para o TodoList: uma para ler e outra para excluir.
         */}
        <TodoList
          tasks={tasks}
          onExcluirTasks={handleDeleteTasks}
          onCheckComplete={handleCompleteTasks}
        />
      </main>
    </div>
  );
};
