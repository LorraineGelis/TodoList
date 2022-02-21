
import React from 'react';
import { TaskRow } from './TaskRow.jsx';
import  {PendingTask} from './PendingTask.jsx';
import {TaskCreator} from './TaskCreator.jsx'

export const ListComponents = ({task, toggleTask, userName, createNewTask, cheked, changetask, taskdone}) => {
  
 
    const taskTableRows = () => {
     return task 
     .map((tasks) => <TaskRow task={tasks} key={tasks.name} toggleTask={toggleTask} />)
  } 

  const list = taskTableRows();

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
        {list.length > 0 ? <tbody>{list}</tbody> : <tbody><tr><td colSpan={2} style={{textAlign:'center'}}>There are no tasks</td></tr></tbody>}
      </table>
    </div>
  )
  
  }




