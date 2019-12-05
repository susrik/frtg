import React from 'react';
import 'bootstrap'
import Tweet from './Tweet';

class TweetQueryResults extends React.Component {

    constructor() {
        super();
        this.state = {tweets: []}
        this.loadTweets();
        setInterval(() => this.loadTweets(), 10000);
    }

    async loadTweets() {
      console.log('starting loadTweets()');

      const response = await fetch(
          window.location.origin + '/tweets'
      );

      const rsp_json = await response.json();
      this.setState({
          tweets: rsp_json.map(t => <Tweet
              user={t.user}
              image={t.profile_image}
              time={t.time}
              location={t.user_loc}
              text={t.text}/>)
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
