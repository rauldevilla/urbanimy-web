import React, { Component } from 'react';

class FeedEntry extends Component {

    getImageUrl = () => {
        return this.props.imageUrl ? <img src={this.props.imageUrl} alt="" /> : <div id="feed-entry-no-img-div"/>;
    }

    render() {
        return (
            <div id="feed-entry">
                <div id="feed-entry-header-container">
                    <div id="feed-entry-header-container-left">{this.getImageUrl()}</div>
                    <div id="feed-entry-header-container-right"><span id="feed-entry-title">{this.props.title}</span></div>
                </div>
                <section>{this.props.content}</section>
            </div>
        );
    }


};

export default FeedEntry;