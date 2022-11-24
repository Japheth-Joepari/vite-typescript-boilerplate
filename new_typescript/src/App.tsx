import {useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { TodoItems } from './components/TodoItems'
import { Todo } from './models/todo'
import { NewTodo } from './components/NewTodo'
import { Scroll } from './components/Scroll'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

const handleTodoText = (todotext: string ) => {
  console.log(todotext); 
  const newTodo = new Todo(todotext)
  setTodos((prevTodos) => {
    return prevTodos.concat(newTodo)
  }) 
}

const handleDeletedItem = (id: string) => {
  console.log(id);
  setTodos((prevTodos) => {
    return prevTodos.filter((todo) => {
        return todo.id !== id
    })
  })
   
  
}

  return (
    <div className="App">
      <div>
        <a target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Typescript + Todo</h1>
      <div className="card">
      <NewTodo todoText={handleTodoText}/>
      <Scroll>
       <TodoItems items={todos} handleDeletedItem={handleDeletedItem}/>
      </Scroll>
      </div>
    </div>
  )
}

export default App
