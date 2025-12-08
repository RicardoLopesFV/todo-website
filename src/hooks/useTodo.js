import { useEffect, useState } from "react";
import { toast } from "sonner";

export const useTodo = () => {
  // # ------------------ ESTADOS ------------------
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");

    return saved ? JSON.parse(saved) : [];
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchInputText, setSearchInputText] = useState("");

  // # ------------------- EFEITOS -------------------
  useEffect(() => {
    // # salva e converte como arquivo JSON
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  // # ------------------- FUNÇÕES -------------------
  const handleAddTasks = (taskName) => {
    const newTask = {
      id: crypto.randomUUID(),
      text: taskName,
      isComplete: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    toast.success("Task created sucessfully!");
  };

  const handleDeleteTasks = (idToDelete) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== idToDelete));
    toast.error("Task deleted!");
  };

  const handleCompleteTasks = (idToComplete) => {
    // # Lógica do toast.
    const taskTarget = tasks.find((task) => task.id === idToComplete);
    if (taskTarget && !taskTarget.isComplete) {
      toast.success("Good job! task completed.");
    }

    // # Lógica de completar.
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id !== idToComplete) return task;

        return { ...task, isComplete: !task.isComplete };
      });
    });
  };

  const handleEditTasks = (idToEdit, newTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === idToEdit ? { ...task, text: newTask } : task
      )
    );
  };

  // # ------------------- LÓGICA FILTRAGEM -------------------
  const depuratedTasks = tasks.filter((task) => {
    if (!task.text) {
      return false;
    }

    return task.text.toLowerCase().includes(searchInputText.toLowerCase());
  });

  /* ! O RETORNO DO HOOK
    # Aqui a gente retorna apenas as funções prontas. O TodoApp não precisa saber como deletar, ele só precisa passar as funções para os componentes que utilizam elas.
  */

  return {
    depuratedTasks,
    isModalOpen,
    setIsModalOpen,
    searchInputText,
    setSearchInputText,
    handleAddTasks,
    handleDeleteTasks,
    handleCompleteTasks,
    handleEditTasks,
  };
};
