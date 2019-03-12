import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos'

class App extends Component {
  state = {
    // dummy data with items
      todos: [
        {id: 1, content: 'finish lambda lecturers'},
        {id: 2, content: 'pick kids from practise'},
        {id: 3, content: 'do a stand up'}
      ]
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
      <div className="App container">
        <header className="App-header">
        <p>Todo Tasks</p>
        </header>
        

       <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}

export default App;
