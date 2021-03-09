import React, { Component } from 'react';

class Swiper extends Component {

    constructor(props) {
        super(props);

        var thisState = {
            swipePanelIndex: 0,
            title: "",
            panels: []
        };

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
        if (this.state.swipePanelIndex < this.props.children.length - 1) {
            var currIndex = this.state.swipePanelIndex;
            this.doSwipe(currIndex, currIndex + 1);
        }
    }

    doSwipe = (fromIndex, toIndex) => {
        console.log('doSwipe', 'fromIndex', fromIndex, 'toIndex', toIndex);
        const swipeRight = fromIndex > toIndex;
        var panels = [...this.state.panels];

        /*
        panels[fromIndex] = React.cloneElement(panels[fromIndex], {
            style: {
                marginLeft: swipeRight ? "-100%" : "100%", 
                transition: "1s"
            }
        });
        
        panels[toIndex] = React.cloneElement(panels[toIndex], {
            style: {
                marginLeft: "0", 
                transition: "1s"
            }
        });
        */

        this.setState({panels: panels, swipePanelIndex: toIndex});
    }

    getTitle = (index) => {
        if (this.props.children.length <= 0 || index > (this.props.children.length - 1)) {
            return "";
        }
        return this.props.children[index].props.title === "undefined" ? "" : this.props.children[index].props.title;
    }

    createChild = (baseChildren, index) => {
        const style = {
            leftMargin: "0%",
            transition: "1s"
        };

        return (<div id="swiper-component-new-element" key={index} style={style}>{baseChildren}</div>);
    }

    createChildren = () => {
        var children = this.props.children.map((c, index) => this.createChild(c, index));
        return children;
    }

    componentDidMount = () => {
        var title = this.getTitle(0);
        var panels = this.createChildren();
        this.setState({title: title, panels: panels});
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
                    {this.state.panels}
                </div>
            </div>
        );
    }
}

export default Swiper;
