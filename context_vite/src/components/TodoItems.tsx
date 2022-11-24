import { TodoContext } from "../store/TodosContext"
import { TodoItem } from "./TodoItem"
import classes from "./Todo.module.css"
import { useContext } from "react"
 
export const TodoItems:React.FC = () =>{
    const todosContext = useContext(TodoContext)
    const handleDelete = (id: string) => {
        todosContext.removeTodo.bind(null, id);
        
    }
    if (todosContext.items.length > 0) {
        return (
            <div className={classes.todos} >
                {todosContext.items.map(item=>( 
                    <TodoItem todo={item.text} key={item.id} id={item.id} handleDelete={handleDelete}/>
                ))}
            </div>
        )
    } return(
        <p style={{color: "red", fontFamily:'fira code', fontSize:'1.3rem', textAlign:"center",}}>No Items here try adding some</p>
    )
}   