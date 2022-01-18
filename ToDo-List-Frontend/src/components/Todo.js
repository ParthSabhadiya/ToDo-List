import { Button } from 'react-bootstrap';
import { BsFillTrashFill } from 'react-icons/bs'
import { IoCheckmarkDoneCircle } from 'react-icons/io5'
import { VscIssueReopened } from "react-icons/vsc";
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

import './CSS/todo.scss'
const Todo = ({ todo, removeTodo, markTodo }) => {
  return (
    <div className="todo" >
      <span style={{ textDecoration: todo.status ? "line-through" : "" }}>{todo.name}</span>
      <div>
        <OverlayTrigger
          delay={{ hide: 450, show: 300 }}
          overlay={(props) => (
            <Tooltip {...props}>
              {!todo.status ? "Check-Out Task" : "Re-open Task"}
            </Tooltip>
          )}
          placement="bottom"
        >
          {!todo.status ?
            <IoCheckmarkDoneCircle className='done-icon' onClick={() => markTodo(todo.id)} /> :
            <VscIssueReopened className='done-icon' onClick={() => markTodo(todo.id)} />
          }
        </OverlayTrigger>
        <OverlayTrigger
          delay={{ hide: 450, show: 300 }}
          overlay={(props) => (
            <Tooltip {...props}>
              Delete Task
            </Tooltip>
          )}
          placement="bottom"
        >
          <BsFillTrashFill className='done-icon' onClick={() => removeTodo(todo.id)} />
        </OverlayTrigger>
      </div>
    </div>
  )
}

export default Todo;


{/* <img src={MdDone} alt="Done" />
        <img src={ImCross} alt="Delete" /> */}
{/* <Button vapriant="outline-danger" className='Delete-button' onClick={() => removeTodo(todo.id)}>Delete</Button> */ }
{/* <Button variant="outline-primary" onClick={() => markTodo(todo.id)}>{(!todo.status ? "Done" : "Reopen")}</Button> */ }
