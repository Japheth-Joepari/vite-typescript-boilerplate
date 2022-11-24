import { Todo } from "../models/todo"
import { TodoItem } from "./TodoItem"
import classes from "./Todo.module.css"
 
export const TodoItems:React.FC<{items: Todo[], handleDeletedItem: (id:string)=>void}> = ({items, handleDeletedItem}) =>{
    const handleDelete = (id: string) => {
        handleDeletedItem(id);
        
    }
    return (
        <div className={classes.todos} >
            {items.map(item=>( 
                <TodoItem todo={item.text} key={item.id} id={item.id} handleDelete={handleDelete}/>
            ))}
        </div>
    )
}   