import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import { FaHome } from 'react-icons/fa';
import { FaCalendarDay } from 'react-icons/fa';
import { FaUserCog } from 'react-icons/fa';

//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';

class FooterBar extends Component {

    render() {
        return (
            <div id="footer-bar">
                <Button className="footer-bar-button" variant="outline-dark">
                    <FaUserCog className="footer-bar-icon"/>
                </Button>
                <Button className="footer-bar-button" variant="outline-dark">
                    <FaCalendarDay className="footer-bar-icon"/>
                </Button>
                <Button className="footer-bar-button" variant="outline-dark">
                    <FaHome className="footer-bar-icon"/>
                </Button>
            </div>
        );
    }

};

export default FooterBar;
