import { Button} from 'react-bootstrap';
import './CSS/todo.css'
const Todo = ({ todo, removeTodo, markTodo }) => {
  return (
    <div className="todo" >
      <span style={{ textDecoration: todo.status ? "line-through" : "" }}>{todo.name}</span>
      <div>
        <Button variant="outline-danger" className='Delete-button' onClick={() => removeTodo(todo.id)}>Delete</Button>
        <Button variant="outline-primary" onClick={() => markTodo(todo.id)}>{(!todo.status ? "Done" : "Reopen")}</Button>
      </div>
    </div>
  )
}

export default Todo
