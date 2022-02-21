import React, {useState} from 'react';
import swal from 'sweetalert';

export const TaskCreator = (props) => {


    const [newTask, setNewTask] = useState("");

    const updateNewTask  = (e) => {
        setNewTask(e.target.value);
    }

    const createNewTask = () => {
        props.createNewTask(newTask)
        setNewTask("");
    }
    return(
        <div className='my-1'>
            <input
             type="text"
             className='form-control'
             value={newTask}
             onChange={updateNewTask}
             
              />
              <button className='btn btn-primary mt-1' onClick={() => {
                  if(!newTask.trim()){
                    swal("ups,", "Por favor ingresa una tarea", "error");
                  } else{
                    createNewTask()
                  } 
                }}
              >
                add
              </button>
        </div>
    )
}