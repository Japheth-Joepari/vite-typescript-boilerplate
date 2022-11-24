import React, { useRef, useState } from "react"
import classes from "./NewTodo.module.css"

export const NewTodo:React.FC<{todoText: (text: string)=>void}> = ({todoText}) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const submitHandller = (e:React.FormEvent) => {
        e.preventDefault()
        const inputValue = inputRef.current!.value
        if(inputValue !== '' && inputValue.length < 20) {
            todoText(inputRef.current!.value)  
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