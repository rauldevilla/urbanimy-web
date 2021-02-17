import React, { Component } from 'react';

import Row from './ui/Row';
import Col from './ui/Col';
import Label from './ui/Label';
import Dropdown from './ui/Dropdown';
import DatePicker from './ui/DatePicker';
import Button from './ui/Button';
import Scheduler from './ui/Scheduler';

import { UserSessionContext } from '../context/UserContext.js';

import Internationalization from '../config/Internationalizacion';

import { getUserLocations } from '../services/UserLocationServices';
import { getUserResourcesInLocation } from '../services/UserLocationServices';

class Reserve extends Component {

    static contextType = UserSessionContext;

    internationalization = new Internationalization();

    constructor(props) {
        super(props);
        this.state = {
            userAvailableLocations: [],
            userAvailableResources: [],
            resourceReserveAvailableDuration: [],
            showScheduler: false
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

    loadAvailableResources = (resourceId) => {
        getUserResourcesInLocation(resourceId,
            (resourcesArray) => {
                this.setState({userAvailableResources: resourcesArray});
            },
            (error) => {
                console.error(error);
            }
        );
    }

    onLocationChange = (e) => {
        this.loadAvailableResources(e.target.value);
    }

    onSearchAvailabilityClick = (event) => {
        this.setState({showScheduler: true});
    }

    componentDidMount = () => {
        this.loadUserAvailableLocations();
    }

    render() {
        return (
            <div id="reserve-component-container">
                <div id="reserve-component-search-params">
                    <p className="scree-title">{this.internationalization.getLabel('reserve-scree-title')}</p>
                    <p className="scree-section-description">{this.internationalization.getLabel('reserve-scree-description')}</p>
                    
                    <Row>
                        <Col size="S">
                            <Label>{this.internationalization.getLabel('location')}</Label>
                        </Col>
                        <Col size="M">
                            <Dropdown onChange={this.onLocationChange}>
                                <option>{this.internationalization.getLabel('select-one-location')}</option>
                                {this.state.userAvailableLocations.map((location) => <option value={location.id} key={location.id}>{location.name}</option>)}
                            </Dropdown>
                        </Col>
                    </Row>

                    <Row>
                        <Col size="S">
                            <Label>{this.internationalization.getLabel('resource')}</Label>
                        </Col>
                        <Col size="M">
                            <Dropdown>
                                {this.state.userAvailableResources.map((resource) => <option value={resource.id} key={resource.id}>{resource.name}</option>)}
                            </Dropdown>
                        </Col>
                    </Row>

                    <Row>
                        <Col size="S">
                            <Label>{this.internationalization.getLabel('duration')}</Label>
                        </Col>
                        <Col size="M">
                            <Dropdown>
                                {this.state.userAvailableResources.map((resource) => <option value={resource.id} key={resource.id}>{resource.name}</option>)}
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
                        <Col size="L" style={{textAlign: "center"}}>
                            <Button style={{margin: "15px"}} onClick={this.onSearchAvailabilityClick}>{this.internationalization.getLabel('search-availability')}</Button>
                        </Col>
                    </Row>
                </div>
                <div id="reserve-component-scheduler-container">
                    {this.state.showScheduler ? <Scheduler />: null}
                </div>
                <div id="reserve-component-bottom-margin"></div>
            </div>
        );
    }

}

export default Reserve;