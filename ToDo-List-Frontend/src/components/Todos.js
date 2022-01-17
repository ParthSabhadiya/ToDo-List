import Todo from './Todo';
import { Card } from 'react-bootstrap';

const Todos = ({ todos, removeTodo, markTodo }) => {
  return (
    <div className='todo'>

{/* Current */}
      <div className='block' >
        <h2>{ todos.length > 1 ? "Current Tasks" : "Current Task"}</h2>

        {!(todos.find(item => {
          return item.status === false
        })) ?
          <p>You do not have any current to do</p>
          : <></>
        }
        {todos.map(todo => (
          <div>

            {
              (!todo.status ? <Card key={todo.id} class="card">
                <Card.Body>
                  <Todo
                    todo={todo}
                    markTodo={markTodo}
                    removeTodo={removeTodo}
                  />
                </Card.Body>
              </Card> : <></>)
            }


          </div>

        ))}
      </div>

{/* Finished task */}
      <div className='block'  >
        <h2>{ markTodo.length > 1 ? "Finished Tasks" : "Finished Task"}</h2>

        {!(todos.find(item => {
          return item.status === true
        })) ?
          <p>You do not have any finished to do</p>
          : <></>
        }

        {todos.map(todo => (
          <div>

            {
              (todo.status ? <Card key={todo.id}>
                <Card.Body>
                  <Todo
                    todo={todo}
                    markTodo={markTodo}
                    removeTodo={removeTodo}
                  />
                </Card.Body>
              </Card> : <></>)
            }


          </div>

        ))}
      </div>
    </div>
  )
}

export default Todos
