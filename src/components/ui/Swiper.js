import React, { Component } from 'react';

class Swiper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            swipePanelIndex: 0
        };
    }

    onTouchMoveHandler = (event) => {
        if (this.props.children !== "undefinden" && this.props.children.length > 0) {
            var touch = event.targetTouches[0];
            console.log('touch', touch);
        }
    }

    onClickHandler = (event) => {
        console.log('event', event);
    }

    render () {
        console.log('this.props.children', this.props.children);
        return (
            <div id="swiper-component-container" {...this.props} onClick={this.onClickHandler} onTouchMove={this.onTouchMoveHandler}>
                {this.props.children}
            </div>
        );
    }
}

export default Swiper;
