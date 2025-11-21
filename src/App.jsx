import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { TodoToolbar } from "./components/TodoToolbar";
import "./App.scss";
import { Footer } from "./components/Footer";
/*
 * Este é o componente principal onde todos os outros componentes menores se montam dentro do "App".
 */
export const App = () => {
  /*
    # Porque a lista de tarefas deve ficar no App.jsx? (Gerente)
      * Tanto o TodoForm quanto o TodoList precisam dessa lista, então o gerente "App" vai solicitar os nomes das tarefas e cria-las em uma lista.
      * O "App" irá passar a lista de tarefas para o TodoList, para que assim o TodoList possa mostrar na tela.
  */

  // ! --- Estados ---

  // ! Estado da lista de tarefas. (Utilizando agora o LocalStorage).
  const [tasks, setTasks] = useState(() => {
    // * Aqui eu pego a lista salva no localStorage.
    const saved = localStorage.getItem("tasks");
    /*
     * Aqui eu retorno o arquivo JSON convertido em um array de objetos, senão tiver nada ele retorna uma lista vazia.
     */
    return saved ? JSON.parse(saved) : [];
  });

  // ! Estado do Modal (Aberto / Fechado).
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ! Estado do texto da busca.
  const [searchInputText, setSearchInputText] = useState("");

  // ! Usando o useEffect para salvar tudo no LocalStorage.
  useEffect(() => {
    // * Convertendo de objeto pra arquivo JSON.
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // ! --- Funções do "Gerente" App ---

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
    // * Pegando a lista anterior que já existia.
    setTasks((prevTasks) => {
      // * Fazendo uma busca pelas tarefas pélo id.
      return prevTasks.map((task) => {
        if (task.id !== idToComplete) {
          return task;
        }
        // * Se for encontrado pelo id invertemos o valor de "isComplete".
        return { ...task, isComplete: !task.isComplete };
      });
    });
  };

  const handleEditTasks = (idToEdit, newText) => {
    setTasks((prevTasks) =>
      // * Mapeando o estado anterior das listas e escaneando cada tarefa.
      prevTasks.map((task) =>
        // * se achar o "id" correspondente podemos mudar o texto.
        task.id === idToEdit ? { ...task, text: newText } : task
      )
    );
  };

  // ! --- Lógica de Filtragem ---
  const depuratedTasks = tasks.filter((task) => {
    if (!task.text) {
      return false;
    }
    return task.text.toLowerCase().includes(searchInputText.toLowerCase());
  });

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <TodoToolbar
          searchInputText={searchInputText}
          setSearchInputText={setSearchInputText}
          onOpenModal={() => setIsModalOpen(true)}
        />
        <TodoList
          onToggleComplete={handleCompleteTasks}
          tasks={depuratedTasks}
          // ? Nomeando como "onEditTask" e passando a função como Prop.
          onEditTasks={handleEditTasks}
          onDeleteTasks={handleDeleteTasks}
        />
        {isModalOpen && (
          <TodoForm
            onAddTask={handleAddTasks}
            onCloseModal={() => setIsModalOpen(false)}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};
