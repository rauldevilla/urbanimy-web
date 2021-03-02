import React, { Component } from 'react';
import { Confirm } from 'react-st-modal';

import Internationalization from '../../config/Internationalizacion';

import useLongPress from '../events/useLongPress';

import { getScheduleForDate } from '../../services/UserLocationServices';

const internationalization = new Internationalization();

const TIME_ZONE_STATUS = {
    OCCUPIED: {
        text: "occupied",
        className: "scheduler-component-time-zone-right-occupied"
    },
    FREE: {
        text: "free",
        className: "scheduler-component-time-zone-right-free"
    },
    UNAVAILABLE: {
        text: "unavailable",
        className: "scheduler-component-time-zone-right-unavailable"
    }
};

class Scheduler extends Component {

    constructor(props) {
        super(props);
        this.state = {
            timeZones: []
        };
    }

    getLabelForHour = (hour) => {
        return (
            hour < 12 ? hour + " a.m." : 
                hour === 12 ? hour + " m." : 
                    (hour - 12) + " p.m."
        );
    }

    getBaseSchedule = () => {
        var timeZones = [];
        for (var hour = 0; hour < 24; hour++) {
            timeZones.push({
                label: this.getLabelForHour(hour),
                value: hour,
                status: TIME_ZONE_STATUS.UNAVAILABLE.text
            });
        }
        return timeZones;
    }


    loadScheduleForDate = () => {
        var scheduleDate = new Date();
        getScheduleForDate(scheduleDate, 
                (scheduleData) => {
                    var baseSchedule = this.getBaseSchedule();
                    scheduleData.schedule.forEach(timeZoneData => {
                        var base = baseSchedule.find(element => element.value === timeZoneData.hour);
                        if (base != null && base !== "undefined") {
                            base.status = timeZoneData.status;
                        }
                    });
                    this.setState({timeZones: baseSchedule});
                },
                (error) => {
                    console.error(error);
                }
            )

    }

    componentDidMount = () => { 
        this.loadScheduleForDate();
    }

    render() {
        return (
            <div id="scheduler-component-container" style={{displa: this.props.hide ? "none" : ""}} {...this.props}>
                {this.state.timeZones.map((timeZone, index) => <TimeZone timeZone={timeZone} resource={{name: "AAABBBCCC"}} key={index}/>)}
            </div>
        );
    }

};

function TimeZone(props) {
    var timeZoneStatus = props.timeZone.status;

    const defaultOptions = {
        shouldPreventDefault: true,
        delay: 500,
    };

    const confirmReserve = async () => {
        if (TIME_ZONE_STATUS.FREE.text === timeZoneStatus) {
            const result = await Confirm(
                internationalization.getLabelTagged('reserve-confirm-message', 
                [
                    {tag: "resource_name", value: props.resource.name},
                    {tag: "reserve_time", value: props.timeZone.label},
                ]),
                internationalization.getLabel('reserve-confirm-title')
            );
            console.log('result', result);
        }
    }

    const onLongPress = () => {
        confirmReserve();
    };

    const onDoubleClickHandler = (event) => {
        confirmReserve();
    };

    const onLongClick = () => {
        //console.log('Long click');
    };

    const getClassNameFromStatus = () => {
        if (TIME_ZONE_STATUS.OCCUPIED.text === timeZoneStatus) {
            return TIME_ZONE_STATUS.OCCUPIED.className;
        } if (TIME_ZONE_STATUS.FREE.text === timeZoneStatus) {
            return TIME_ZONE_STATUS.FREE.className;
        } if (TIME_ZONE_STATUS.UNAVAILABLE.text === timeZoneStatus) {
            return TIME_ZONE_STATUS.UNAVAILABLE.className;
        }
        return "";
    };

    const longPressEvent = useLongPress(onLongPress, onLongClick, defaultOptions);

    const getRightComponent = () => {
        return (
            <div className={getClassNameFromStatus()} onDoubleClick={onDoubleClickHandler} {...longPressEvent} >
                <div id="small-time-label">{props.timeZone.label}</div>
            </div>
        )
    };

    const getLeftComponent = () => {
        return (
            <div id="scheduler-component-time-zone-left">
                {props.timeZone.label}
            </div>
        );
    };

    return (
        <div id="scheduler-component-time-zone">
            {getLeftComponent()}
            {getRightComponent()}
        </div>
    )

}

export default Scheduler;