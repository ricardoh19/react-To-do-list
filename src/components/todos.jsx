import React, { Component } from 'react';
import TodoItem from './todoItem';

class Todos extends Component {

    markComplete = (id) =>{
        console.log(id)
    }


    render() { 
        return this.props.todos.map(todo => (<TodoItem key={todo.id} todo={todo} markComplete={this.markComplete} onEdit={this.props.onEdit} onDelete={this.props.onDelete}/>
        ));
    }
}
 
export default Todos;