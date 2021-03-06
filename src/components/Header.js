import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'

import Menu from './Menu';

import { Configuration } from '../config/Constants';

import { UserSessionContext } from '../context/UserContext.js';

class Header extends Component {

    static contextType = UserSessionContext;

    render() {
        const avatar = (this.context.isValidSession() ? <Image src={this.context.getUserProfile().imageUrl} roundedCircle style={{width: "38px"}}/> : <div/>);
        return (
            <div id="header-container">
                <section id="header-first-line">
                    <div id="header-app-name"><div id="header-app-title">{Configuration.APP_NAME}</div></div>
                    <div id="header-user-avatar">
                        {avatar}
                    </div>
                </section>
                <div style={{display: (this.context.isValidSession() ? "block" : "none")}}>
                    <section id="header-second-line" ><Menu/></section>
                </div>
            </div>

        );
    }
}

export default Header;