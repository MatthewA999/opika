import React, { useState } from "react";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";
import "./styles.css";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const addTask = (task) => {
    setTasks([...tasks, { text: task, completed: false }]);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const navigateToPaginationManager = () =>
    (window.location.href = "/pagination-manager");

  return (
    <div>
      <div className="navbar-buttons">
        <button
          className="button button-green"
          onClick={navigateToPaginationManager}
        >
          Pagination Manager
        </button>
        <button
          onClick={() => setModalOpen(true)}
          className="button button-blue"
        >
          Add Task
        </button>
      </div>
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTaskCompletion={toggleTaskCompletion}
      />
      {isModalOpen && (
        <AddTaskModal
          addTask={addTask}
          closeModal={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};

export default TaskManager;
