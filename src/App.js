import React from 'react'
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoContextProvider from './context/TodoContext';
import './App.css';


const App = () => {
  return (
    <TodoContextProvider >
      <div className="container">
        <div className="wrapper">
        <div className="App">
            <Header/>
            <div className="main">
              <TodoForm/>
              <TodoList/>
            </div>
        </div>
        </div>
      </div>
        
    </TodoContextProvider>
    
  )
}

export default App
