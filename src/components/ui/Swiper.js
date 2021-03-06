import React, { Component } from 'react';

class Swiper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            swipePanelIndex: 0,
            title: ""
        };
    }

    onTouchMoveHandler = (event) => {
        if (this.props.children !== "undefinden" && this.props.children.length > 0) {
            var touch = event.targetTouches[0];
            console.log('touch', touch);
        }
    }

    leftClickHandle = (event) => {
        if (this.state.swipePanelIndex > 0) {
        }
    }

    rightClickHandle = (event) => {
        if (this.state.swipePanelIndex < this.props.children.length - 1) {
            var currIndex = this.state.swipePanelIndex;
            var comp = this.props.children[currIndex];
            
            console.log('comp.style', comp.props.style);

            comp.props.style.marginLeft = "-100%";
            comp.props.style.transition = '1s';
            
            this.setState({swipePanelIndex: currIndex + 1});
        }
    }

    getTitle = (index) => {
        if (this.props.children.length <= 0 || index > (this.props.children.length - 1)) {
            return "";
        }
        console.log('this.props.children', this.props.children);
        return this.props.children[index].props.title === "undefined" ? "" : this.props.children[index].props.title;
    }

    componentDidMount = () => {
        var title = this.getTitle(0);
        console.log('title', title);
        this.setState({title: title});
    }

    render () {
        return (
            <div id="swiper-component-container" {...this.props} onTouchMove={this.onTouchMoveHandler}>
                <div id="swiper-component-header">
                    <div id="left" onClick={this.leftClickHandle}><i className="arrow left-arrow"/></div>
                    <div id="middle">{this.state.title}</div>
                    <div id="right" onClick={this.rightClickHandle}><i className="arrow right-arrow"></i></div>
                </div>
                <div id="swiper-component-body">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Swiper;
