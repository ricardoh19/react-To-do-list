import React, { Component } from 'react';

class TodoItem extends Component {
    state = {  }

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through': 'none'
            }
    
    }

    render() { 
        return ( 
            <div style={this.getStyle()} className="m-2">
                <input type="checkbox" onChange={this.props.markComplete.bind(this,this.props.todo.id)}/>
                <p>{this.props.todo.title}</p>
                <p>{this.props.todo.date}</p>
                <button className="btn btn-danger" style={deleteStyle} onClick={() => this.props.onDelete(this.props.todo.id)}>Delete</button>
            </div>
         );
    }

}

const deleteStyle = {
    float: "right",
    padding: "5px 10px"
}
 
export default TodoItem;