import {useContext} from "react";
import { TodoContext } from "../store/TodosContext";
import classes from "./TodoItem.module.css"


export const TodoItem:React.FC<{todo:string, id:string, handleDelete: (id: string) => void}> = ({todo, id, handleDelete}) => {
    const todoContext =useContext(TodoContext)
    const handleClick = (e:React.MouseEvent) => {
        todoContext.removeTodo(id)
    }
    return (
        <ul className={classes.item}>
            <li>{todo} <button onClick={handleClick}>x</button></li>
        </ul>
    )
}
