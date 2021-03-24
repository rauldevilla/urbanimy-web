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
import { getUserResourceTypesInLocation } from '../services/UserLocationServices';
import { getUserResourceTypesByTypeId } from '../services/UserLocationServices';

class Reserve extends Component {

    static contextType = UserSessionContext;

    internationalization = new Internationalization();

    constructor(props) {
        super(props);
        this.state = {
            userAvailableLocations: [],
            userAvailableResourcesTypes: [],
            resourcesArray: [],
            hasSchedules: false
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

    loadAvailableResourcesTypes = (resourceId) => {
        getUserResourceTypesInLocation(resourceId,
            (resourceTypessArray) => {
                if (resourceTypessArray != null && resourceTypessArray !== "undefined" && resourceTypessArray.length > 0) {
                    this.setState({userAvailableResourcesTypes: resourceTypessArray});
                } else {
                    this.setState({userAvailableResourcesTypes: []});
                }
            },
            (error) => {
                console.error(error);
            }
        );
    }

    loadAvailableResources = (resourceTypeId) => {
        getUserResourceTypesByTypeId(
            resourceTypeId,
            (resourcesArray) => {
                console.log('resourcesArray', resourcesArray);
                this.setState({resourcesArray: resourcesArray});
            },
            (error) => {
                console.error(error);
            }
        );
    }

    onLocationChange = (e) => {
        this.loadAvailableResourcesTypes(e.target.value);
    }

    onResourceTypeChange = (e) => {
        if (e.target.value !== "" ) {
            this.loadAvailableResources(e.target.value);
        }
    }

    onSearchAvailabilityClick = (event) => {
        this.setState({hasSchedules: this.hasResources()});
    }

    onAcceptReserveHandler = (reserve) => {
        console.log('reserve', reserve);
    }

    hasResources = () => {
        var hasIt = this.state.resourcesArray != null && 
                    this.state.resourcesArray !== "undefined";
        if (Array.isArray(this.state.resourcesArray)) {
            hasIt = hasIt && this.state.resourcesArray.length > 0;
        }
        return hasIt;
    }

    hasSchedules = () => {
        return this.state.hasSchedules;
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
                                <option value="">{this.internationalization.getLabel('select-one-location')}</option>
                                {this.state.userAvailableLocations.map((location) => <option value={location.id} key={location.id}>{location.name}</option>)}
                            </Dropdown>
                        </Col>
                    </Row>

                    <Row>
                        <Col size="S">
                            <Label>{this.internationalization.getLabel('resource-type')}</Label>
                        </Col>
                        <Col size="M">
                            <Dropdown onChange={this.onResourceTypeChange}>
                                {this.state.userAvailableResourcesTypes.length > 0 ? <option value="">{this.internationalization.getLabel('select-one-resource-type')}</option> : null}
                                {this.state.userAvailableResourcesTypes.map((resourceType) => <option value={resourceType.id} key={resourceType.id}>{resourceType.name}</option>)}
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
                            <Button disabled={!this.hasResources()} style={{margin: "15px"}} onClick={this.onSearchAvailabilityClick} type="submit">{this.internationalization.getLabel('search-availability')}</Button>
                        </Col>
                    </Row>
                </div>
                <div id="reserve-component-scheduler-container">
                    {this.hasSchedules() ? <Scheduler resources={this.state.resourcesArray} onAcceptReserve={this.onAcceptReserveHandler}/>: null}
                </div>
                <div id="reserve-component-bottom-margin"></div>
            </div>
        );
    }

}

export default Reserve;