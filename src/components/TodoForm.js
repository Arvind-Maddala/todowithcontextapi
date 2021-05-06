import React, {useState,useEffect,useContext} from 'react';
import {TodoContext} from '../context/TodoContext';

const TodoForm = () => {
  const {addTask,editTask,editItem} = useContext(TodoContext);
 
  const [title, setTitle]= useState('')

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(editItem===null){
      addTask(title);
      setTitle('')
    } else{
      editTask(title, editItem.id);
    }
  }
  useEffect(()=>{
    if(editItem !== null){
      setTitle(editItem.item)
    } else{
      setTitle('')
    }
  },[editItem])

  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="text" className="form__field" placeholder="Add Task..."   value={title} onChange={(e)=>setTitle(e.target.value) } required/>
      <button className="button" type="submit" ><i class="fas fa-plus"></i></button>
    </form>
  )
}

export default TodoForm;
