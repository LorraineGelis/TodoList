
import React, {useState, useEffect} from 'react';
import {ListComponents} from './ListComponent.jsx';

const ListContainer = () => {

    
    const [userName, SetUserName] = useState('Lore')
    const [taskItems, setTaskItems] = useState([]);

      const [showTaskDone, setShowTaskDone ] = useState(true)

      useEffect(() => {
        let dataTask = localStorage.getItem('task');
        if(dataTask != null){
          setTaskItems(JSON.parse(dataTask));
        }else{
          SetUserName("Welcome")
          setTaskItems([
            { name: "Learn type Script", done: false },
            { name: "Learn Angular", done: true },
          ])
          setShowTaskDone(true);
        }

      }, []);

      useEffect(() => {
        localStorage.setItem('task', JSON.stringify(taskItems));
      }, [taskItems])
      

       const toggleTask = task => {
         //console.log("funciono yuju")
         setTaskItems(taskItems.map(e => (e.name === task.name ? {...e, done: !e.done} : e))) 
       }

       const createNewTask = (newTaskName) => {
        if(!taskItems.find(e => e.name === newTaskName)){
          setTaskItems([...taskItems, {name: newTaskName, done: false}])
        }
       }

      
      
      return <ListComponents
       task= {taskItems} 
       toggleTask={toggleTask} 
       userName={userName} 
       createNewTask={createNewTask}
        cheked={showTaskDone} 
        changetask={checked => setShowTaskDone(checked)} />
}

export default ListContainer;








