import React, { Component } from 'react';
import Todos from './components/todos';
import Navbars from './components/navbars';
import InputBar from './components/inputbar';
import "bootstrap/dist/css/bootstrap.css";
import {v4 as uuid} from 'uuid';




class App extends Component {
  state = {
    todos: [
        {
            id: uuid(),
            title: 'take out the trash',
            completed: false,
            date: ""
        }
    ]
  } 
  render() { 
    return ( 
      <React.Fragment>
          <Navbars totalItems={this.state.todos.length} />
          <main className="container">
              <InputBar addTodo={this.addTodo}/>
              <Todos todos={this.state.todos} onDelete={this.handleDelete} onEdit={this.handleEdit} markComplete={this.markComplete}/>
          </main>
      </React.Fragment>
    );
  }
  // delete item
  handleDelete = (id) => {
    const todo = this.state.todos.filter(t => t.id !== id);
    this.setState({todos: todo});
  }

  handleEdit = () => {
    this.setState({ todos: {...this.state.todos, title: 'run'}});
  }



  addTodo = (title) =>{
    const newTodo = {
      id: uuid(),
      title: title,
      completed: false,
      date:new Date().toLocaleDateString()
    }
    this.setState({todos: [...this.state.todos, newTodo]})
  }
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

}
 
export default App;