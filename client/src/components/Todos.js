import Todo from './Todo';
import { Card } from 'react-bootstrap';

const Todos = ({ todos, removeTodo, markTodo }) => {
  return (
    <div>
      <h2>Current Task</h2>
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
                </Card> : <p></p>)
              }
              
              
            </div>
            
          ))}
        </div>
  )
}

export default Todos
