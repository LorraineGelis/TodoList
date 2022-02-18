
import React from 'react';
import { TaskRow } from './TaskRow.jsx';



export const ListComponents = ({task, toggleTask}) => {
  
 
    const taskTableRows = () => {
     return task.map((tasks) => (
          <TaskRow task={tasks} key={tasks.name} toggleTask={toggleTask} />
      ))
  
  }  
  return(
  
      <div>
      <h1>Hola</h1>
      <table>
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




