import React, { Component } from 'react';
import useLongPress from '../events/useLongPress';

const TIME_ZONES = [

    {
        label: "1 a.m.",
        value: 1,
        status: "unavailable"
    },
    {
        label: "2 a.m.",
        value: 2,
        status: "unavailable"
    },
    {
        label: "3 a.m.",
        value: 3,
        status: "unavailable"
    },
    {
        label: "4 a.m.",
        value: 4,
        status: "unavailable"
    },
    {
        label: "5 a.m.",
        value: 5,
        status: "reserved"
    },
    {
        label: "6 a.m.",
        value: 6,
        status: "reserved"
    },
    {
        label: "7 a.m.",
        value: 7,
        status: "free"
    },
    {
        label: "8 a.m.",
        value: 8,
        status: "free"
    },
    {
        label: "9 a.m.",
        value: 9,
        status: "free"
    },
    {
        label: "10 a.m.",
        value: 10,
        status: "free"
    },
    {
        label: "11 a.m.",
        value: 11,
        status: "free"
    },
    {
        label: "12 m.",
        value: 12,
        status: "free"
    },
    {
        label: "1 p.m.",
        value: 13,
        status: "free"
    },
    {
        label: "2 p.m.",
        value: 14,
        status: "free"
    },
    {
        label: "3 p.m.",
        value: 15,
        status: "reserved"
    },
    {
        label: "4 p.m.",
        value: 16,
        status: "reserved"
    },
    {
        label: "5 p.m.",
        value: 17,
        status: "reserved"
    },
    {
        label: "6 p.m.",
        value: 18,
        status: "reserved"
    },
    {
        label: "7 p.m.",
        value: 19,
        status: "free"
    },
    {
        label: "8 p.m.",
        value: 20,
        status: "free"
    },
    {
        label: "9 p.m.",
        value: 21,
        status: "free"
    },

];


class Scheduler extends Component {

    render() {
        return (
            <div id="scheduler-component-container" style={{displa: this.props.hide ? "none" : ""}} {...this.props}>
                {TIME_ZONES.map((timeZone, index) => <TimeZone timeZone={timeZone} key={index}/>)}
            </div>
        );
    }

};

function TimeZone(props) {
    var timeZoneStatus = props.timeZone.status;

    const TIME_ZONE_STATUS = {
        RESERVED: {
            text: "reserved",
            className: "scheduler-component-time-zone-right-reserved"
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

    const defaultOptions = {
        shouldPreventDefault: true,
        delay: 500,
    };

    const startReserve = () => {
        if (TIME_ZONE_STATUS.FREE.text === timeZoneStatus) {
            console.log('Start reserve');
        }
    }

    const onLongPress = () => {
        startReserve();
    };

    const onDoubleClickHandler = (event) => {
        startReserve();
    };

    const onLongClick = () => {
        //console.log('Long click');
    };

    const getClassNameFromStatus = () => {
        if (TIME_ZONE_STATUS.RESERVED.text === timeZoneStatus) {
            return TIME_ZONE_STATUS.RESERVED.className;
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