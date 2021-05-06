import React, {useContext} from 'react';
import {TodoContext} from '../context/TodoContext';

const Task = ({task}) => {
const {removeTask, findItem} = useContext(TodoContext);
  return (
    <div className="task">
      <h3> {task.item}</h3>
      <div >
      <button className="task-button far fa-edit" onClick={() => findItem(task.id)}><i ></i></button>
      <button className="task-button far fa-trash-alt" onClick={()=>removeTask(task.id)}><i ></i></button>
      </div>
    </div>
  )
}

export default Task
