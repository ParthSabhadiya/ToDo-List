import Todo from './Todo';
import { Card } from 'react-bootstrap';

const Todos = ({ todos, removeTodo, markTodo }) => {
  // console.log("todos",todos.length, markTodo.length)
  return (
    <div className='todo'>

      {/* Current */}
      <div className='block' >
        <h2>Current Tasks</h2>

        {!(todos.find(item => {
          return item.status === false
        })) ?
          <p>You do not have any current to do</p>
          : <></>
        }
        {todos.map(todo => (
          <div key={todo.id}>
            {
              (!todo.status ? <Card key={todo.id} className="card">
                <Card.Body className='current-card-body-background'>
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
        <h2>Finished Tasks</h2>

        {!(todos.find(item => {
          return item.status === true
        })) ?
          <p>You do not have any finished to do</p>
          : <></>
        }

        {todos.map(todo => (
          <div key={todo.id}>

            {
              (todo.status ? <Card key={todo.id}>
                <Card.Body className='finished-card-body-background'>
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
