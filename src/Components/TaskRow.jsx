 import React from 'react';


export const TaskRow = (props) => {

    
  /*   const setCheked = (value) => {
    props.toggleTask(value)
    } */

    return <tr key={props.task.name}>
          <td>{props.task.name}</td>
          <td>
              <input 
              type="checkbox" 
              checked={props.task.done}
              onChange={props.toggleTask}
              /> 
          </td>
        </tr>
} 