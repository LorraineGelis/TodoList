import React from "react";
import { TaskRow } from "./TaskRow.jsx";
import { PendingTask } from "./PendingTask.jsx";
import { TaskCreator } from "./TaskCreator.jsx";

export const ListComponents = ({ task, toggleTask, userName, createNewTask }) => {
  const taskTableRows = () => {
    return task.map((tasks) => <TaskRow task={tasks} key={tasks.name} toggleTask={toggleTask} />);
  };

  const list = taskTableRows();

  return (
    <div className="container">
      <div className="row p-3">
        <div className="card text-white bg-dark">
          <div className="card-body">
            <div className="col-12 p-3">
              <PendingTask userName={userName} task={task}></PendingTask>
            </div>
            <div className="col-12">
              <TaskCreator createNewTask={createNewTask}></TaskCreator>
            </div>
            <div className="col-12">
              <ul className="list-group">
                {list.length > 0 ? (
                  <>{list}</>
                ) : (
                  <li className="list-group-item text-white bg-dark text-center fs-3">There are no tasks</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
