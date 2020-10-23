import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image'

import { Configuration } from '../config/Constants';

import { UserSessionContext } from '../context/UserContext.js';

class Header extends Component {

    static contextType = UserSessionContext;

    showUserOptions = () => {
        if (this.context.isValidSession()) {
            return (
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            );
        } else {
            return (
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            );
        }
    }

    showUserInfo = () => {
        if (this.context.isValidSession()) {
            return (
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text style={{marginRight: "10px"}}>
                        <a href="#login">{this.context.getUserProfile().name}</a>
                    </Navbar.Text>
                    <Navbar.Text>
                        <Image src={this.context.getUserProfile().imageUrl} roundedCircle style={{width: "38px"}}/>
                    </Navbar.Text>
                </Navbar.Collapse>
            );
        } else {
            return <div/>
        }
    }

    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">{Configuration.APP_NAME}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    {this.showUserOptions()}
                    {this.showUserInfo()}
                </Navbar>
            </div>

        );
    }
}

export default Header;