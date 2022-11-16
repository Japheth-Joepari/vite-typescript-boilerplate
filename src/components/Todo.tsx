import React from 'react'
import Todos from '../models/todo'
import TodoItems from './TodoItems'

const Todo:React.FC<{items: Todos[]}> = ({items}) => {
    return (
        <div>
           {items.map((item) => {
            return(
                <TodoItems key={item.id} todoText={item.text}/>
            )
           })}
        </div>
    )
}
export default Todo