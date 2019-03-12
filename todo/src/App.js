import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import TodoForm from './components/TodoForm'

class App extends Component {
  state = {
    // dummy data with items
      todos: [ ]
  }
  addTodo = (todo) => {
    todo.id = Math.random()
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
     }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="app container">
        <header className="App-header">
        <p>Todo Tasks</p>
        </header>
        <TodoForm  addTodo={this.addTodo}/>

       <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
     
      </div>
    );
  }
}

export default App;
