import { Header } from "../../components/Header";
import { TodoToolbar } from "../../components/TodoToolbar";
import { TodoList } from "../../components/TodoList";
import { TodoForm } from "../../components/TodoForm";
import { Footer } from "../../components/Footer";
import { useTodo } from "../../hooks/useTodo";
import "./index.scss";

export const TodoApp = () => {
  /*
    ! Chamando o HOOK
      # Aqui nós buscamos as funções que precisamos passar para os respectivos componentes.
  */
  const {
    depuratedTasks,
    isModalOpen,
    setIsModalOpen,
    searchInputText,
    setSearchInputText,
    handleAddTasks,
    handleDeleteTasks,
    handleCompleteTasks,
    handleEditTasks,
  } = useTodo();

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
