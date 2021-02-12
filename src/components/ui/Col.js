import React, { Component } from 'react';

const COL_SIZES_STYLE_NAMES = {
    L: "col-100",
    M: "col-75",
    S: "col-25"
};


class Col extends Component {

    getColWidthClassName = () => {
        if (this.props.size === "M") {
            return COL_SIZES_STYLE_NAMES.M;
        } else if (this.props.size === "S") {
            return COL_SIZES_STYLE_NAMES.S;
        }
        return COL_SIZES_STYLE_NAMES.L;
    }

    render() {
        return <div className={this.getColWidthClassName()}>{this.props.children}</div>
    }
}

export default Col;