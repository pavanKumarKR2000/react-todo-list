import React from 'react'
import Todo from './Todo';

const TodoList = ({todos}) => {
  return (
      <div className='todo-list-container'>
      {
        todos.map(todo => {
          return <Todo key={todo.id} todo={todo} />
        })
      }
     </div>
  )
}

export default TodoList;