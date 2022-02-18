
import React from 'react';
import { TaskRow } from './TaskRow.jsx';
import  {PendingTask} from './PendingTask.jsx';



export const ListComponents = ({task, toggleTask, userName}) => {
  
 
    const taskTableRows = () => {
     return task.map((tasks) => (
          <TaskRow task={tasks} key={tasks.name} toggleTask={toggleTask} />
      ))
  
  }  
  return(
      
      <div>
      <PendingTask userName={userName} task={task}></PendingTask>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>{taskTableRows()}</tbody>
      </table>
    </div>
  )
  
  }




