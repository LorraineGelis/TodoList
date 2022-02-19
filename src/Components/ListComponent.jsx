
import React from 'react';
import { TaskRow } from './TaskRow.jsx';
import  {PendingTask} from './PendingTask.jsx';
import {TaskCreator} from './TaskCreator.jsx'
import {TaskDone} from './TaskDone.jsx'



export const ListComponents = ({task, toggleTask, userName, createNewTask, cheked, changetask, taskdone}) => {
  
 
    const taskTableRows = (doneVlr) => {
     return task
     .filter(task => task.done === doneVlr)     
     .map((tasks) => (
          <TaskRow task={tasks} key={tasks.name} toggleTask={toggleTask} />
      ))
  
  } 
  return(
      
      <div>
      <PendingTask userName={userName} task={task}></PendingTask>
      <TaskCreator createNewTask={createNewTask}></TaskCreator> 
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>{taskTableRows(false)}</tbody>
      </table>
      <div className="bg-secondary-text-white text-center p-2">
        <TaskDone
        title={"Show Task Done"}
        cheked={cheked}
        changetask={changetask}
        ></TaskDone>
      </div>
      {cheked && (
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Done</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {taskTableRows(true)}
          </tbody>
        </table>
      )
      }
    </div>
  )
  
  }




