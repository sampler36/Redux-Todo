import React from 'react'

const Todos = ({todos, deleteTodo}) => {
  // tenary operator to check whether if true or false
  const todoList = todos.length ? (

    // map function to identify each individual item
    todos.map(todo => {
      return (
        <div key={todo.id}>
          <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
        </div>
      )
    })
  ) : ( 
    <p>You have nothing Todo </p>
  )
    return (
      <div className="center">
      {todoList}
      </div>

    )
}

export default Todos;