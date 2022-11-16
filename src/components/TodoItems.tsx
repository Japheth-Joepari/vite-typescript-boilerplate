import Todos from "../models/todo"

const TodoItems:React.FC<{todoText: string}> = ({todoText}) => {
    return (
        <ul>
            <li>{todoText}</li>
        </ul>
    )

}
export default TodoItems