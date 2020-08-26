import React, { Component } from 'react';

class InputBar extends Component {
    state = { 
        title: ''
     }
    render() { 
        return ( 
            <div className="container">
                <form onSubmit={this.handleSubmit} className="text-center">
                        <input type="text" value={this.state.title} onChange={this.handleChange} placeholder="Add item" className="m-2"/>
                        <input type="submit" value="submit" className="btn btn-primary" />
                </form>
            </div>
         );
    }

    handleChange = (event) => {
        this.setState({title: event.target.value});
    }
    handleSubmit = (event) =>{
        this.props.addTodo(this.state.title);
        this.setState({title: ''}) // title is then erased.
        event.preventDefault();
    }

}
 
export default InputBar;