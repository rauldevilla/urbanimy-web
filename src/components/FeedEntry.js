import React, { Component } from 'react';

class FeedEntry extends Component {

    render() {
        return (
            <div id="feed-entry">
                <h3>{this.props.title}</h3>
                <section>{this.props.content}</section>
            </div>
        );
    }


};

export default FeedEntry;