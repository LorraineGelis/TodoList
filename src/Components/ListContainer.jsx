
import React, {useState} from 'react';
import {ListComponents} from './ListComponent.jsx';

const ListContainer = () => {

    
    const [userName, SetUserName] = useState('Lore')
    const [taskItems, setTaskItems] = useState([

        { name: "task One", done: false },
        { name: "task two", done: false },
        { name: "task three", done: true },
        { name: "task four", done: false },
      ]);

       const toggleTask = task => {
         //console.log("funciono yuju")
         setTaskItems(taskItems.map(e => (e.name === task.name ? {...e, done: !e.done} : e))) 
       }
        
      
      
      return <ListComponents task= {taskItems} toggleTask={toggleTask} userName={userName} />
}

export default ListContainer;








