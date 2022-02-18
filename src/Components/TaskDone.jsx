import React from 'react';

export const TaskDone = (props) => {
    return (
        <div className='form-check'>
            <input type="checkbox"
            className='form-check-input'
            checked={props.cheked}
            onChange={e => props.changetask(e.target.checked)}
             />
             <label htmlFor="form-check-label">
                 {props.title}
             </label>
        </div>
        


    )
}