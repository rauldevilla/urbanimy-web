import React, { Component } from 'react';

import Row from './ui/Row';
import Col from './ui/Col';
import TextInput from './ui/TextInput';

class Reserve extends Component {

    render() {
        return (
            <div id="reserve-container" >
                <Row>
                    <Col size="S"/>
                    <Col size="M">
                        <TextInput />
                    </Col>
                </Row>
            </div>
        );
    }

}

export default Reserve;