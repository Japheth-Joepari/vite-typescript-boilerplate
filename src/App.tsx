import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Todo from './components/Todo'
import Todos from './models/todo'
import NewTodos from './components/NewTodo'

const App = () => {
  const [todos, setTodos] = useState<Todos[]>([])

  // const todoItems = [
  //   new Todos('clean the trash'),
  //   new Todos('Go to school'),
  //   new Todos('sweep the house')
  // ]

  const handleNewTodo = (enteredTodo: string) => {
    // console.log(enteredTodo);
    const newTodo = new Todos(enteredTodo);
    
    setTodos((prevTodos) => {
      prevTodos.concat(newTodo)
    })

  }
  return (
    <div className="App">
      <div>
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        <a href="#" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Todo + Typescript</h1>
      <NewTodos enteredText={handleNewTodo}/>
      <Todo items={todos}/>
     
    </div>
  )
}

export default App
