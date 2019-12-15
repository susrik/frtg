import React from 'react';
import 'bootstrap'
import Tweet from './Tweet';
import './TweetQueryResults.scss';

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
          tweets: rsp_json.map(t => (
              <div class='grid-item'>
                  <Tweet info={t}/>
              </div>
          ))
      });

    }

    render() {
        return (
            <div class='grid-container'>
                {this.state.tweets}
            </div>
        );
    }
}

export default TweetQueryResults;
