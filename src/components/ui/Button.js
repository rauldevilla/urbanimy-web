import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <button className="button-component" {...this.props}>
                {this.props.children}
            </button>
        );
    }
}

export default Button;