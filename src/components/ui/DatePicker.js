import React, { Component } from 'react';

import Internationalization from '../../config/Internationalizacion';

const DAYS = [
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31
];

const YEARS = [
    2020, 2021, 2022
];

class DatePicker extends Component {

    internationalization = new Internationalization();

    constructor(props) {
        super(props);
        var today = new Date();
        this.state = {
            currentDate: {
                day: today.getDate(),
                month: today.getMonth() + 1,
                year: today.getFullYear()
            }
        };
    }

    selectCurrentDate = () => {
        return (
            this.props.selectCurrenDate != null &&
            this.props.selectCurrenDate !== 'undefinded' &&
            this.props.selectCurrenDate
        );
    }

    render() {
        return (
            <div>
                <select className="calendar-component" defaultValue={this.selectCurrentDate() ? this.state.currentDate.day : ""}>
                    {DAYS.map((day) => <option value={day} key={day}>{day}</option>)}
                </select>
                <select className="calendar-component" defaultValue={this.selectCurrentDate() ? this.state.currentDate.month : ""}>
                    {this.internationalization.getLabel('months').map((month) => 
                         <option value={month.id} key={month.id}>{month.name}</option>
                    )}
                </select>
                <select className="calendar-component" defaultValue={this.selectCurrentDate() ? this.state.currentDate.year : ""}>
                    {YEARS.filter((year) => year >= this.state.currentDate.year).map((year) => <option value={year} key={year}>{year}</option>)}
                </select>
            </div>
        );
    }
}

export default DatePicker;
