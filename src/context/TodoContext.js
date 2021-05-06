import React, {useState,createContext, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
const initialState = JSON.parse(localStorage.getItem('tasks')) || [];
 const [tasks, setTasks] = useState(initialState);
  //Adding Task
 const addTask = (item) =>{
  setTasks([...tasks, {item, id:uuidv4()}])
 }

 //Removing Task
 const removeTask = (id) =>{
   setTasks(tasks.filter(t => t.id !== id))
 }
 //Editing Task

 const [editItem, setEditItem] = useState(null);
 
 const findItem = (id) =>{
   const item = tasks.find(t => t.id === id);
   setEditItem(item);
 }
 console.log(editItem);
 const editTask = (item, id) => {
  const newTasks = tasks.map(task => (task.id === id ? { item, id } : task))

  console.log(newTasks)

  setTasks(newTasks)
  setEditItem(null);
}

//localstorage
useEffect(() => {
  localStorage.setItem('tasks',JSON.stringify(tasks))
}, [tasks]);

 return(
   <TodoContext.Provider value={{tasks, addTask, removeTask,findItem,editTask,editItem}}>
     {props.children}
   </TodoContext.Provider>
 )

}

export default  TodoContextProvider;
