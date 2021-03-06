import React, { Component } from 'react';

class Button extends Component {


    isDisable = () => {
        return this.props.disabled;
    }

    getClassName = () => {
        if (this.isDisable()) {
            return "button-component-disabled";
        }
        return "button-component-submit";
    }

    render() {
        return (
            <button className={this.getClassName()} {...this.props}>
                {this.props.children}
            </button>
        );
    }
}

export default Button;