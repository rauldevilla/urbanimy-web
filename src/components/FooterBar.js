import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import { FaHome } from 'react-icons/fa';
import { FaCalendarDay } from 'react-icons/fa';
import { FaUserCog } from 'react-icons/fa';

import { UserSessionContext } from '../context/UserContext.js';

class FooterBar extends Component {

    static contextType = UserSessionContext;

    CONFIG_BUTTON = () => {
        return <FaUserCog className="footer-bar-icon"/>;
    }

    HOME_BUTTON = () => {
        return <FaHome className="footer-bar-icon" />;
    }

    RESERVE_BUTTON = () => {
        return <FaCalendarDay className="footer-bar-icon" onClick={this.reserve}/>;
    }

    reserve = () => {
        this.context.startReserve();
    }

    leftButton = () => {
        if (this.context.isRightHandUser()) {
            return this.CONFIG_BUTTON();
        } else {
            return this.HOME_BUTTON();
        }
    }

    rightButton = () => {
        if (this.context.isRightHandUser()) {
            return this.HOME_BUTTON();
        } else {
            return this.CONFIG_BUTTON();
        }
    }

    middleButton = () => {
        return this.RESERVE_BUTTON();
    }

    render() {
        return (
            <div id="footer-bar">
                <Button className="footer-bar-button" variant="outline-dark">
                    {this.leftButton()}
                </Button>
                <Button className="footer-bar-button" variant="outline-dark">
                    {this.middleButton()}
                </Button>
                <Button className="footer-bar-button" variant="outline-dark">
                    {this.rightButton()}
                </Button>
            </div>
        );
    }

};

export default FooterBar;
