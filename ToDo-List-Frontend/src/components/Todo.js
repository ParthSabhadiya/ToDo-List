import { Button } from 'react-bootstrap';
import { BsFillTrashFill } from 'react-icons/bs'
import { IoCheckmarkDoneCircle } from 'react-icons/io5'
import { VscIssueReopened } from "react-icons/vsc";

import './CSS/todo.scss'
const Todo = ({ todo, removeTodo, markTodo }) => {
  return (
    <div className="todo" >
      <span style={{ textDecoration: todo.status ? "line-through" : "" }}>{todo.name}</span>
      <div>
        {!todo.status ?
          <IoCheckmarkDoneCircle className='done-icon' onClick={() => markTodo(todo.id)} /> :
          <VscIssueReopened className='done-icon' onClick={() => markTodo(todo.id)} />
        }
        <BsFillTrashFill className='done-icon' onClick={() => removeTodo(todo.id)} />
      </div>
    </div>
  )
}

export default Todo;


{/* <img src={MdDone} alt="Done" />
        <img src={ImCross} alt="Delete" /> */}
{/* <Button vapriant="outline-danger" className='Delete-button' onClick={() => removeTodo(todo.id)}>Delete</Button> */ }
{/* <Button variant="outline-primary" onClick={() => markTodo(todo.id)}>{(!todo.status ? "Done" : "Reopen")}</Button> */ }
