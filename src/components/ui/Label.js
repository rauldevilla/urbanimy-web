import React, { Component } from 'react';

class Label extends Component {
    render() {
        return <label className="label-component" {...this.props} />
    }
}

export default Label;