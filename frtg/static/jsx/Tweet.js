import React from 'react';
import 'bootstrap'

class Tweet extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
            // {
            //     "hashtags":["love2eduroam"],
            //     "retweet":{
            //         "time":"Fri Dec 06 08:40:07 +0000 2019",
            //         "user":{
            //             "name":"eduroam",
            //             "profile_image":"http://pbs.twimg.com/profile_images/963711228529999873/SlBRXIy4_normal.jpg",
            //             "screen_name":"eduroam",
            //             "user_loc":"The World"
            //         }
            //     },
            //     "text":"So many people around the world #love2eduroam. If you're one of them, vote now for \"Product of the Year\" in the WiFi Awards. https://t.co/Wi4lX6YUl5",
            //     "time":"Thu Dec 05 21:02:21 +0000 2019",
            //     "user":{
            //         "name":"TENET",
            //         "profile_image":"http://pbs.twimg.com/profile_images/1060464971958681600/P4vx0-7E_normal.jpg",
            //         "screen_name": "tenetnews",
            //         "user_loc": "Cape Town, South Africa"
            //     }
            // }

        var retweet_text = '';
        var retweet_image = '';
        if ('retweet' in this.props.info) {
            var ru = this.props.info.retweet.user;
            retweet_text = ru.name + '@' + ru.screen_name + ' retweeted';
            retweet_image = ru.profile_image;
        }

        return (
            <div>
                <span class="retweet-image">
                    <image src={retweet_image}/>
                </span>
                <span class="retweet-text">
                    {retweet_text}
                </span>

                <span class="user-image">
                    <image src={this.props.info.user.profile_image}/>
                </span>
                <span className="user-name">
                    {this.props.info.user.name}
                </span>
                <span className="user-screen-name">
                    "@" + {this.props.info.user.screen_name}
                </span>

                <span className="tweet-time">
                    {this.props.info.time}
                </span>
                <span className="tweet-time">
                    {this.props.info.text}
                </span>
            </div>
        );
    }
}

export default Tweet;
