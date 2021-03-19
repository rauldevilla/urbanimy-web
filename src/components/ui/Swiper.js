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

        var childrenArray = this.createChildrenArray(props);

        var thisState = {
            swipePanelIndex: 0,
            panelStyles: [],
            children: childrenArray,
            elementBaseStyle: props.elementBaseStyle
        };

        childrenArray.forEach((e, index) => {
            thisState[ELEMENT_STYLE_PREFIX + index] = (index === 0 ? 
                this.createElementStyleForPosition(MOVEMENT_POSITION.middle) : this.createElementStyleForPosition(MOVEMENT_POSITION.right));
        });
    
        this.state = thisState;
    }

    createChildrenArray = (props) => {
        if (props.children == null || props.children === "undefined") {
            return [];
        }
        if (!Array.isArray(props.children)) {
            return [props.children];
        }
        return props.children;
    }

    createElementStyleForPosition = (position, baseStyle) => {
        console.log('baseStyle', baseStyle);
        return ({
            left: MOVEMENT_POSITION.right === position ? "100%" : 
                            MOVEMENT_POSITION.left === position ? "-100%" : "0",
            transition: "1s",
            position: "absolute"
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

    getChildTitle = (index) => {
        return this.props.children[index].props.title;
    }

    doSwipe = (fromIndex, toIndex) => {
        const swipeRight = fromIndex < toIndex;

        var fromStyle = this.createElementStyleForPosition(swipeRight ? MOVEMENT_POSITION.left : MOVEMENT_POSITION.right);
        var toStyle = this.createElementStyleForPosition(MOVEMENT_POSITION.middle, this.state.elementBaseStyle);

        var title = this.getChildTitle(toIndex);

        this.setState({
            swipePanelIndex: toIndex, 
            title: title,
            [ELEMENT_STYLE_PREFIX + fromIndex]: fromStyle,
            [ELEMENT_STYLE_PREFIX + toIndex]: toStyle,
        });

    }

    getTitle = (index) => {
        var childrenArray = this.state.children;
        if (childrenArray.length <= 0 || index > (childrenArray.length - 1)) {
            return "";
        }
        return this.state.children[index].props.title === "undefined" ? "" : this.state.children[index].props.title;
    }

    getCurrentTitle = () => {
        return this.getTitle(this.state.swipePanelIndex);
    }


    getElementBaseStyle = (element) => {
        var props = element.props;
        if (props == null || props === "undefined") {
            return null;
        }
        var baseStyle = props.elementsBaseStyle;
        if (baseStyle == null || baseStyle === "undefined") {
            return null;
        }
        return baseStyle;
    }

    createChild = (baseChildren, index) => {
        var baseStyle = this.getElementBaseStyle(baseChildren);

        var style = {...baseStyle, ...this.state[ELEMENT_STYLE_PREFIX + index]};

        return (<div    id="swiper-component-new-element" 
                        key={index} 
                        style={style}>{baseChildren}</div>);
    }

    createChildren = () => {
        var childrenBase = this.state.children;
        var children = childrenBase.map((c, index) => this.createChild(c, index));
        return children;
    }

    getLeftArrowClass = () => {
        return (this.state.swipePanelIndex === 0 ? "arrow-disabled " : "arrow ") + "left-arrow";
    }

    getRightArrowClass = () => {
        return (this.state.swipePanelIndex < (this.props.children.length - 1) ? "arrow " : "arrow-disabled ") + "right-arrow";
    }

    render () {
        const children = this.createChildren();
        const title = this.getCurrentTitle();

        return (
            <div id="swiper-component-container" {...this.props} onTouchMove={this.onTouchMoveHandler}>
                <div id="swiper-component-header">
                    <div id="left" onClick={this.leftClickHandle}><i className={this.getLeftArrowClass()}/></div>
                    <div id="middle">{title}</div>
                    <div id="right" onClick={this.rightClickHandle}><i className={this.getRightArrowClass()}></i></div>
                </div>
                <div id="swiper-component-body">
                    {/*this.props.children*/}
                    {children}
                </div>
            </div>
        );
    }
}

export default Swiper;
