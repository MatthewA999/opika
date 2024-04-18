import React from "react";

const TaskItem = ({ task, index, deleteTask, toggleTaskCompletion }) => {
  return (
    <div className="task-item">
      <div className="task-item-text">
        <input
          type="checkbox"
          className="cursor"
          checked={task.completed}
          onChange={() => toggleTaskCompletion(index)}
        />
        <div className={task.completed ? "completed" : ""}>{task.text}</div>
      </div>
      <button
        className="button button-red"
        onClick={() =>
          window.confirm("Are you sure you want to delete this task?") &&
          deleteTask(index)
        }
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
