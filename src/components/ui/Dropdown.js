import React, { Component } from 'react';

class Dropdown extends Component {
    render() {
        return (
            <select className="dropdown-component" {...this.props}>
                {this.props.children}
            </select>
        );
    }
}

export default Dropdown;