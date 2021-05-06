import React, {useContext} from 'react';
import {TodoContext} from '../context/TodoContext';
import Task from './Task';

const TodoList = () => {
  const {tasks} = useContext(TodoContext);
  return (
    <div className="list">
      {tasks.length >0 ?(<ul >
      {tasks.map((task) =>{
        return <Task task={task} key={task.id}/>
      })}
      </ul>) : (<div className="no-tasks">
        <h4>No Tasks</h4>
      </div>)}
      
    </div>
  )
}

export default TodoList
