import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import { UserSessionContext } from '../context/UserContext.js';

import Internationalization from '../config/Internationalizacion';

class Menu extends Component {

    internationalization = new Internationalization();

    static contextType = UserSessionContext;

    reserve = () => {
        this.context.startReserve();
    }

    home = () => {
        this.context.goHome();
    }

    render() {
        return (
            <div style={{display: (this.context.isValidSession() ? "block" : "none")}}>
                <Navbar bg="light">
                    <Nav.Link href="#home" onClick={this.home}>{this.internationalization.getLabel("menu-home")}</Nav.Link>
                    <Nav.Link href="#link" onClick={this.reserve}>{this.internationalization.getLabel("menu-reserve")}</Nav.Link>
                    <Nav.Link href="#link">{this.internationalization.getLabel("menu-settings")}</Nav.Link>
                </Navbar>
            </div>
        )
    }
};

export default Menu;
