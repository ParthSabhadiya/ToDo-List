import Todo from './Todo';
import { Card } from 'react-bootstrap';

const Todos = ({ todos, removeTodo, markTodo }) => {
  return (
    <div className='todo'>
       
      <div >
           { todos.find(item=>{
              return item.status === false
            }) ? <h2>Current Task</h2> : <></>
           }
          {todos.map(todo => (
            <div>
              
              {
                (!todo.status ? <Card key={todo.id}>
                  <Card.Body>
                    <Todo                
                    todo={todo}
                    markTodo={markTodo}
                    removeTodo={removeTodo}
                    />
                  </Card.Body>
                </Card> : <p></p>)
              }
              
              
            </div>
            
          ))}
          </div>
          <div>
         { 
            todos.find(item=>{
              return item.status === true
            }) ? <h2>Finished Task</h2> : <></>
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
