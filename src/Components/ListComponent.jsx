
import React from 'react';



export const ListComponents = (props) => {
    
    console.log(props.task, "Algo aqui")
 
   /* const taskTableRows = () => {
     return taskItem.map((task) => (
          <TaskRow task={task.name} />
      ))
  
  }  */
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
        <tbody>{}</tbody>
      </table>
    </div>
  )
  
  }




