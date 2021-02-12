import React, { Component } from 'react';

import Row from './ui/Row';
import Col from './ui/Col';
import Label from './ui/Label';
import TextInput from './ui/TextInput';
import Dropdown from './ui/Dropdown';

import Internationalization from '../config/Internationalizacion';

const LOCATIONS = {
    
}

class Reserve extends Component {

    internationalization = new Internationalization();

    render() {
        return (
            <div id="reserve-container" >
                <p className="scree-title">{this.internationalization.getLabel('reserve-scree-title')}</p>
                <p className="scree-section-description">{this.internationalization.getLabel('reserve-scree-description')}</p>
                
                <Row>
                    <Col size="S">
                        <Label>{this.internationalization.getLabel('location')}</Label>
                    </Col>
                    <Col size="M">
                        <Dropdown>
                            <option>Uno</option>
                            <option>Dos</option>
                        </Dropdown>
                    </Col>
                </Row>
            </div>
        );
    }

}

export default Reserve;