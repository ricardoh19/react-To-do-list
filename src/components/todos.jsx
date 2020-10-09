import React, { Component } from 'react';
import TodoItem from './todoItem';

class Todos extends Component {


    render() { 
        return this.props.todos.map(todo => (<TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} onEdit={this.props.onEdit} onDelete={this.props.onDelete}/>
        ));
    }
}
 
export default Todos;