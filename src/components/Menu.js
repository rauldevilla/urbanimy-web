import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import { UserSessionContext } from '../context/UserContext.js';

class Menu extends Component {

    static contextType = UserSessionContext;

    render() {
        return (
            <div style={{display: (this.context.isValidSession() ? "block" : "none")}}>
                <Navbar bg="light">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Reserve</Nav.Link>
                    <Nav.Link href="#link">Settings</Nav.Link>
                </Navbar>
            </div>
        )
    }
};

export default Menu;
