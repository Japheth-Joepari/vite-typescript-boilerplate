import React, { useRef, useContext } from "react"
import { TodoContext } from "../store/TodosContext"
import classes from "./NewTodo.module.css"

export const NewTodo:React.FC = () => {
    const todosContext = useContext(TodoContext)
    const inputRef = useRef<HTMLInputElement>(null)

    const submitHandller = (e:React.FormEvent) => {
        e.preventDefault()
        const inputValue = inputRef.current!.value
        if(inputValue !== '' && inputValue.length < 20) {
            todosContext.addTodo(inputRef.current!.value)  
            inputRef.current!.value = ''   
        }return
    }
    return (
        <form action="" onSubmit={submitHandller} className={classes.form}>
            <input type="text" ref={inputRef}/>
            <button type="submit">Add</button>
        </form>
    )
}