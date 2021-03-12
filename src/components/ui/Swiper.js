import React, { Component } from 'react';

const ELEMENT_STYLE_PREFIX = "ELEMENT_STYLE_";

const MOVEMENT_POSITION = {
    left: "LEFT",
    right: "RIGHT",
    middle: "MIDDLE"
};

class Swiper extends Component {

    constructor(props) {
        super(props);

        var thisState = {
            swipePanelIndex: 0,
            title: "",
            panels: [],
            panelStyles: []
        };

        props.children.forEach((e, index) => {
            thisState[ELEMENT_STYLE_PREFIX + index] = (index === 0 ? 
                this.createElementStyleForPosition(MOVEMENT_POSITION.middle) : this.createElementStyleForPosition(MOVEMENT_POSITION.right));
        });

        this.state = thisState;
    }

    createElementStyleForPosition = (position) => {
        return ({
            left: MOVEMENT_POSITION.right === position ? "100%" : 
                            MOVEMENT_POSITION.left === position ? "-100%" : "0",
            transition: "1s"
        });
    }

    onTouchMoveHandler = (event) => {
        if (this.props.children !== "undefinden" && this.props.children.length > 0) {
            var touch = event.targetTouches[0];
            console.log('touch', touch);
        }
    }

    leftClickHandle = (event) => {
        if (this.state.swipePanelIndex > 0) {
            var currIndex = this.state.swipePanelIndex;
            this.doSwipe(currIndex, currIndex - 1);
        }
    }

    rightClickHandle = (event) => {
        if (this.state.swipePanelIndex < (this.props.children.length - 1)) {
            var currIndex = this.state.swipePanelIndex;
            this.doSwipe(currIndex, currIndex + 1);
        }
    }

    doSwipe = (fromIndex, toIndex) => {
        const swipeRight = fromIndex < toIndex;

        var fromStyle = this.createElementStyleForPosition(swipeRight ? MOVEMENT_POSITION.left : MOVEMENT_POSITION.right);
        var toStyle = this.createElementStyleForPosition(MOVEMENT_POSITION.middle);

        this.setState({
            swipePanelIndex: toIndex, 
            [ELEMENT_STYLE_PREFIX + fromIndex]: fromStyle,
            [ELEMENT_STYLE_PREFIX + toIndex]: toStyle,
        });

    }

    getTitle = (index) => {
        if (this.props.children.length <= 0 || index > (this.props.children.length - 1)) {
            return "";
        }
        return this.props.children[index].props.title === "undefined" ? "" : this.props.children[index].props.title;
    }

    createChild = (baseChildren, index) => {
        return (<div    id="swiper-component-new-element" 
                        key={index} 
                        style={this.state[ELEMENT_STYLE_PREFIX + index]}>{baseChildren}</div>);
    }

    createChildren = () => {
        var children = this.props.children.map((c, index) => this.createChild(c, index));
        return children;
    }

    getLeftArrowClass = () => {
        return (this.state.swipePanelIndex === 0 ? "arrow-disabled " : "arrow ") + "left-arrow";
    }

    getRightArrowClass = () => {
        return (this.state.swipePanelIndex < (this.props.children.length - 1) ? "arrow " : "arrow-disabled ") + "right-arrow";
    }

    componentDidMount = () => {
        var title = this.getTitle(0);
        var panels = this.createChildren();
        this.setState({title: title, panelStyles: this.panelStyles, panels: panels});
    }

    render () {
        const children = this.createChildren();
        return (
            <div id="swiper-component-container" {...this.props} onTouchMove={this.onTouchMoveHandler}>
                <div id="swiper-component-header">
                    <div id="left" onClick={this.leftClickHandle}><i className={this.getLeftArrowClass()}/></div>
                    <div id="middle">{this.state.title}</div>
                    <div id="right" onClick={this.rightClickHandle}><i className={this.getRightArrowClass()}></i></div>
                </div>
                <div id="swiper-component-body">
                    {children}
                </div>
            </div>
        );
    }
}

export default Swiper;
