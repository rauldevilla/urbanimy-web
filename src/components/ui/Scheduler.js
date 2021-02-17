import React, { Component } from 'react';

const TIME_ZONES = [

    {
        label: "5 a.m.",
        value: 5
    },
    {
        label: "6 a.m.",
        value: 6
    },
    {
        label: "7 a.m.",
        value: 7
    },
    {
        label: "8 a.m.",
        value: 8
    },
    {
        label: "9 a.m.",
        value: 9
    },
    {
        label: "10 a.m.",
        value: 10
    },
    {
        label: "11 a.m.",
        value: 11
    },
    {
        label: "12 m.",
        value: 12
    },
    {
        label: "1 p.m.",
        value: 13
    },
    {
        label: "2 p.m.",
        value: 14
    },
    {
        label: "3 p.m.",
        value: 15
    },
    {
        label: "4 p.m.",
        value: 16
    },
    {
        label: "5 p.m.",
        value: 17
    },
    {
        label: "6 p.m.",
        value: 18
    },
    {
        label: "7 p.m.",
        value: 19
    },
    {
        label: "8 a.m.",
        value: 20
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

    render() {
        return (
            <div id="scheduler-component-time-zone">
                <div id="scheduler-component-time-zone-left">
                    {this.props.timeZone.label}
                </div>
                <div id="scheduler-component-time-zone-right-unavailable"></div>
            </div>
        );
    }

}

export default Scheduler;