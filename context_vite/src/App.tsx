import reactLogo from './assets/react.svg'
import './App.css'
import { TodoItems } from './components/TodoItems'
import { NewTodo } from './components/NewTodo'
import { Scroll } from './components/Scroll'
import { TodosContextProvider } from './store/TodosContext'

function App() {

  return (
    <TodosContextProvider>
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
      
      <NewTodo/>
      {/* <Scroll> */}
       <TodoItems/>
      {/* </Scroll> */}
      </div>
    </div>
    </TodosContextProvider>
  )
}

export default App
