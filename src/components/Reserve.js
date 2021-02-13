import React, { Component } from 'react';

import Row from './ui/Row';
import Col from './ui/Col';
import Label from './ui/Label';
//import TextInput from './ui/TextInput';
import Dropdown from './ui/Dropdown';
import DatePicker from './ui/DatePicker';
import TimePicker from './ui/TimePicker'

import { UserSessionContext } from '../context/UserContext.js';

import Internationalization from '../config/Internationalizacion';

import { getUserLocations } from '../services/UserLocationServices';

class Reserve extends Component {

    static contextType = UserSessionContext;

    internationalization = new Internationalization();

    constructor(props) {
        super(props);
        this.state = {
            userAvailableLocations: []
        };
    }

    loadUserAvailableLocations = () => {
        getUserLocations(this.context.getUserProfile(),
            (locationsArray) => {
                this.setState({userAvailableLocations: locationsArray});
            },
            (error) => {
                console.error(error);
            }
        );
    }

    componentDidMount = () => {
        this.loadUserAvailableLocations();
    }

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
                            {this.state.userAvailableLocations.map((location) => <option value={location.id} key={location.id}>{location.name}</option>)}
                        </Dropdown>
                    </Col>
                </Row>

                <Row>
                    <Col size="S">
                        <Label>{this.internationalization.getLabel('date')}</Label>
                    </Col>
                    <Col size="M"><DatePicker selectCurrenDate={true}/></Col>
                </Row>

                <Row>
                    <Col size="S">
                        <Label>{this.internationalization.getLabel('time')}</Label>
                    </Col>
                    <Col size="M"><TimePicker /></Col>
                </Row>
            </div>
        );
    }

}

export default Reserve;