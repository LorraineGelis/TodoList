import React, { useState, useEffect } from "react";
import { ListComponents } from "./ListComponent.jsx";

const ListContainer = () => {
  const [userName, SetUserName] = useState("Welcome");
  const [taskItems, setTaskItems] = useState([]);

  useEffect(() => {
    let dataTask = localStorage.getItem("task");

    if (dataTask != null) {
      setTaskItems(JSON.parse(dataTask));
    } else {
      SetUserName("Lore");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(taskItems));
  }, [taskItems]);

  const toggleTask = (task) =>
    setTaskItems(taskItems.map((e) => (e.name === task.name ? { ...e, done: !e.done } : e)));

  const createNewTask = (newTaskName) => {
    if (!taskItems.find((e) => e.name === newTaskName)) {
      setTaskItems([...taskItems, { name: newTaskName, done: false }]);
    }
  };

  return (
    <ListComponents
      task={taskItems}
      toggleTask={toggleTask}
      userName={userName}
      createNewTask={createNewTask}
    />
  );
};

export default ListContainer;
