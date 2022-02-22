import React, { useState } from "react";
import swal from "sweetalert";

export const TaskCreator = (props) => {
  const [newTask, setNewTask] = useState("");

  const updateNewTask = (e) => {
    setNewTask(e.target.value);
  };

  const createNewTask = () => {
    props.createNewTask(newTask);
    setNewTask("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newTask.trim()) {
      swal("ups,", "Por favor ingresa una tarea", "error");
    } else {
      createNewTask();
    }
  };
  return (
    <div className="my-1">
      <form className="input-group mb-3" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control bg-dark text-white"
          value={newTask}
          onChange={updateNewTask}
          placeholder="Add a task"
          autoFocus
        />
        <button
          className="btn btn-primary border border-white todo-button"
          type='submit'
        >
          Add
        </button>
      </form>
    </div>
  );
};
