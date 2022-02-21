 import React from 'react';
 import './../App.css';

export const TaskRow = (props) => {

    return <tr key={props.task.name} className={props.task.done ? 'Is-done' : 'Is-undone'}>
          <td>{props.task.name}</td>
          <td>
              <input 
              type="checkbox" 
              checked={props.task.done}
              onChange={() => props.toggleTask(props.task)}
              /> 
          </td>
        </tr>
} 