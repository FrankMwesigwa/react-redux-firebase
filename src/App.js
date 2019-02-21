import React, { Component } from 'react';
import AddTodo from './components/addTodo'
import Todos from './components/todos'

class App extends Component {

  state = {
    todos:[
      {id:1, content:'Finish up setting up Flask'},
      {id:2, content:'React Redux Ninja'}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({todos:todos})
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({todos:todos})
  }


  render() {
    return (
      <div className="App">
      
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
        
      </div>
    );
  }
}

export default App;
