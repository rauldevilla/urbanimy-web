import React, { Component } from 'react';

import FeedEntry from './FeedEntry';

const FEEDS = [
    {
        title: "Feed !!",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. "
    },
    {
        title: "Feed !!",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. "
    },
];


class Feed extends Component {

    getFeeds = () => {
        return (
                FEEDS.map((feed) =>
                    <FeedEntry title={feed.title} content={feed.content}/>
                )
        );
    }

    render() {
        return (
            <div id="feed-container">
                {this.getFeeds()}
            </div>
        );
    }

};

export default Feed;
