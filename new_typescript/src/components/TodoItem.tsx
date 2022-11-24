import React from "react";
import classes from "./TodoItem.module.css"


export const TodoItem:React.FC<{todo:string, id:string, handleDelete: (id: string) => void}> = ({todo, id, handleDelete}) => {
    const handleClick = (e:React.MouseEvent) => {
        handleDelete(id)
    }
    return (
        <ul className={classes.item}>
            <li>{todo} <button onClick={handleClick}>x</button></li>
        </ul>
    )
}
