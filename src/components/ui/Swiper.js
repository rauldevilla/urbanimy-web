import React, { Component } from 'react';

const STYLE_PREFIX = {
   left: "elementLeft-",
   display: 'elementDisplay-'
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
            thisState[STYLE_PREFIX.left + index] = (index === 0 ? "0" : "100%");
            thisState[STYLE_PREFIX.display + index] = (index === 0 ? "block" : "none");
        });

        this.state = thisState;
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
        console.log('doSwipe', 'fromIndex', fromIndex, 'toIndex', toIndex);
        const swipeRight = fromIndex < toIndex;

        console.log('this.panelStyles', this.panelStyles);

        var marginLeftFrom = swipeRight ? "-100%" : "100%";

        this.setState({
            swipePanelIndex: toIndex, 
            [STYLE_PREFIX.left + fromIndex]: marginLeftFrom, 
            [STYLE_PREFIX.display + fromIndex]: 'none', 
            [STYLE_PREFIX.left + toIndex]: "0",
            [STYLE_PREFIX.display + toIndex]: 'block'
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
                        style={{
                            left: this.state[STYLE_PREFIX.left + index],
                            //display: this.state[STYLE_PREFIX.display + index],
                            transition: "1s"
                        }}>{baseChildren}</div>);
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
        console.log('children', children);
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
