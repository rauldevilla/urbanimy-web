import React, { Component } from 'react';

import { Configuration } from '../config/Constants';

class FeedEntry extends Component {

    getImageUrl = () => {
        return this.props.imageUrl ? this.props.imageUrl : Configuration.DEFAULT_IMAGE_URL;
    }

    render() {
        return (
            <div id="feed-entry">
                <div id="feed-entry-header-container">
                    <div id="feed-entry-header-container-left"><img src={this.getImageUrl()} alt=""/></div>
                    <div id="feed-entry-header-container-right"><span id="feed-entry-title">{this.props.title}</span></div>
                </div>
                <section>{this.props.content}</section>
            </div>
        );
    }


};

export default FeedEntry;