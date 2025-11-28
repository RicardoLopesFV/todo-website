import { toast } from "sonner";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { TodoToolbar } from "../../components/TodoToolbar";
import { TodoList } from "../../components/TodoList";
import { TodoForm } from "../../components/TodoForm";
import { Footer } from "../../components/Footer";
import "./index.scss";

// # NOVO CÉREBRO DA APLICAÇÃO.
export const TodoApp = () => {
  // ! --- ESTADOS ---

  // # Estado das tarefas.
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");

    // * Ele retorna a lista em objeto JS, senão houver nada retorna uma lista vazia.
    return saved ? JSON.parse(saved) : [];
  });

  // # Estado do Modal (Aberto ou Fechado).
  const [isModalOpen, setIsModalOpen] = useState(false);

  // # Estado do texto na barra de pesquisa.
  const [searchInputText, setSearchInputText] = useState("");

  // # useEffect para salvar no LocalStorage (Logo será Firebase).
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // ! --- Funções ---

  // # Adicionando tarefas a lista.
  const handleAddTasks = (tasksName) => {
    // # Criando a tarefa em si (o objeto{}).
    const newTask = {
      id: crypto.randomUUID(), // ? id aleatório.
      text: tasksName,
      isComplete: false,
    };

    // * prevTasks = lista de tarefas já existente.
    setTasks((prevTasks) => [...prevTasks, newTask]);

    // * Aqui no final implementamos o toast.
    toast.success("Task created sucessfully!");
  };

  // # Deletando tarefas.
  const handleDeleteTasks = (idToDelete) => {
    // * filter retorna a lista já existente com todas as tarefas que tenham o "id" diferente do "idToDelete".
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== idToDelete));

    toast.error("Task deleted!");
  };

  // # Completando tarefas.
  const handleCompleteTasks = (idToComplete) => {
    // * Colocando o toast fora do setTasks para não disparar o toast 2x de uma vez.
    const taskTarget = tasks.find((task) => task.id === idToComplete);
    if (taskTarget && !taskTarget.isComplete) {
      toast.success("Good job! task completed.");
    }

    setTasks((prevTasks) => {
      // * Percorrendo a lista até achar o id que queremos.
      return prevTasks.map((task) => {
        if (task.id !== idToComplete) return task;
        // * Se achar ele vai inverter o valor booleano de "isComplete".
        return { ...task, isComplete: !task.isComplete };
      });
    });
  };

  // # Editando tarefas.
  const handleEditTasks = (idToEdit, newText) => {
    setTasks((prevTasks) =>
      // * Percorre a lista.
      prevTasks.map((task) =>
        // * Vamos poder editar a propriedade "text" do objeto task.
        task.id === idToEdit ? { ...task, text: newText } : task
      )
    );
  };

  // ! --- Lógica de filtragem ---
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
