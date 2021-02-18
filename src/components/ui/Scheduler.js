import React, { Component } from 'react';

const TIME_ZONES = [

    {
        label: "5 a.m.",
        value: 5,
        status: "unavailable"
    },
    {
        label: "6 a.m.",
        value: 6,
        status: "unavailable"
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
        status: "unavailable"
    },
    {
        label: "4 p.m.",
        value: 16,
        status: "unavailable"
    },
    {
        label: "5 p.m.",
        value: 17,
        status: "unavailable"
    },
    {
        label: "6 p.m.",
        value: 18,
        status: "unavailable"
    },
    {
        label: "7 p.m.",
        value: 19,
        status: "free"
    },
    {
        label: "9 a.m.",
        value: 20,
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

}

class TimeZone extends Component {

    getClassNameFromStatus = () => {
        if ("unavailable" === this.props.timeZone.status) {
            return "scheduler-component-time-zone-right-unavailable"
        } if ("free" === this.props.timeZone.status) {
            return "scheduler-component-time-zone-right-free"
        }
        return "";
    }

    render() {
        return (
            <div id="scheduler-component-time-zone">
                <div id="scheduler-component-time-zone-left">
                    {this.props.timeZone.label}
                </div>
                <div className={this.getClassNameFromStatus()}></div>
            </div>
        );
    }

}

export default Scheduler;