import React, { useRef } from "react"

const NewTodos:React.FC<{enteredText: (text: string) => void}> = ({enteredText}) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const handleFormSubmit = (e: React.FormEvent) => {
        console.log('todo added');
        const todoValue = inputRef.current!.value
        enteredText(todoValue)
    }
    return (
        <form action="" onSubmit={handleFormSubmit}>
            <input type='text' placeholder='Enter a text Here' ref={inputRef}/>
            <button type='submit'>Add Todo</button>
        </form>
    )
} 

export default NewTodos