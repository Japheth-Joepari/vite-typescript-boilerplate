import React, {useState} from "react";
import { Todo } from "../models/todo";

type TodoContextObj = {
    items: Todo[],
    addTodo: (todotext: string) => void,
    removeTodo: (id:string) => void,
}   

export const TodoContext = React.createContext<TodoContextObj>({
    items: [],
    addTodo: (todoText: string) => {},
    removeTodo: (id:string)=> {}
})

export const TodosContextProvider: React.FC<{children:any}> = ({children}) => {

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
      })}

      const contextValue: TodoContextObj = {
        items: todos,
        addTodo: handleTodoText,
        removeTodo: handleDeletedItem
      }

    return (
        <TodoContext.Provider value={contextValue}>
            {children}
        </TodoContext.Provider>
    )

}