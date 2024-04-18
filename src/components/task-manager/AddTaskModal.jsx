import React, { useState } from "react";

const AddTaskModal = ({ addTask, closeModal }) => {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim()) {
      addTask(input);
      closeModal();
      setInput("");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your task here..."
          rows="4"
          className="text-area"
        />
        <div className="modal-buttons">
          <button
            onClick={closeModal}
            className="button modal-button button-red"
          >
            Close
          </button>
          <button
            onClick={handleAdd}
            className={`button modal-button ${
              input ? "button-blue" : "button-disabled"
            }`}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;
