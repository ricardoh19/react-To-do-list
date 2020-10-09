import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

class Navbars extends Component {

    render() { 
        return ( 
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="" >
                    <h4>Todo List</h4>
                </Navbar.Brand>
                <span className="badge badge-pill badge-info m-4">Total Items: {this.props.totalItems} </span>
            </Navbar>
         );
    }
}
 
export default Navbars;