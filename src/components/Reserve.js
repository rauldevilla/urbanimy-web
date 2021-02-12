import React, { Component } from 'react';

import Row from './ui/Row';
import Col from './ui/Col';
import Label from './ui/Label';
import TextInput from './ui/TextInput';

import Internationalization from '../config/Internationalizacion';

class Reserve extends Component {

    internationalization = new Internationalization();

    render() {
        return (
            <div id="reserve-container" >
                <Row>
                    <Col size="S">
                        <Label>{this.internationalization.getLabel('name')}</Label>
                    </Col>
                    <Col size="M">
                        <TextInput />
                    </Col>
                </Row>
            </div>
        );
    }

}

export default Reserve;