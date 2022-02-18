
import React, {useState} from 'react';
import {ListComponents} from './ListComponent.jsx';

const ListContainer = () => {

    
    const [taskItems, setTaskItems] = useState([

        { name: "task One", done: false },
        { name: "task two", done: false },
        { name: "task three", done: true },
        { name: "task four", done: false },
      ]);
      
      return <ListComponents task= {taskItems}/>


}

export default ListContainer;








