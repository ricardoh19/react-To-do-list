import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

class Navbars extends Component {

    render() { 
        return ( 
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="" >
                    <h4>Todo List</h4>
                </Navbar.Brand>
            </Navbar>
         );
    }
}
 
export default Navbars;