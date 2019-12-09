import React from 'react';
import 'bootstrap'
import Tweet from './Tweet';

const REFRESH_FREQUENCY_MS = 120000;

class TweetQueryResults extends React.Component {

    constructor() {
        super();
        this.state = {tweets: []}
        this.loadTweets();
        setInterval(() => this.loadTweets(), REFRESH_FREQUENCY_MS);
    }

    async loadTweets() {
      console.log('starting loadTweets()');

      const response = await fetch(
          window.location.origin + '/tweets'
      );

      const rsp_json = await response.json();
      this.setState({
          tweets: rsp_json.map(t => <Tweet info={t}/>)
      });

    }

    render() {
        return (
            <div>
                {this.state.tweets}
            </div>
        );
    }
}

export default TweetQueryResults;
