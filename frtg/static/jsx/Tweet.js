import React from 'react';
import { formatRelative } from 'date-fns';
import 'bootstrap'
import './Tweet.scss';

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

        var retweet_visibility_style = {display: 'none'}
        var rtuser = {
            name: '######',
            screen_name: '####',
            profile_image: '####'
        };

        if ('retweet' in this.props.info) {
            retweet_visibility_style = {};
            rtuser = this.props.info.retweet.user;
        }

        var user = this.props.info.user;

        var relative = formatRelative(Date.parse(this.props.info.time), Date.now());
        return (

            <span className="tweet-container">

                <span className="user-row">
                    <span className="tweet-time">
                        {relative}
                    </span>
                </span>


                <span className="user-row">
                    <span className="profile-image">
                        <img src={this.props.info.user.profile_image}/>
                    </span>
                    <span className="user">
                        {user.name}
                    </span>
                    <span className="screen-name">
                        {'@' + user.screen_name}
                    </span>
                </span>

                <span className="tweet-text-row">
                    <span className="tweet-text"
                        dangerouslySetInnerHTML={{__html: this.props.info.html}} />
                </span>

                <span className="retweet-row" style={retweet_visibility_style}>
                    <span className="retweeted">
                        retweeted by
                    </span>
                    <span className="profile-image">
                        <img src={rtuser.profile_image}/>
                    </span>
                    <span className="user retweeted">
                        {rtuser.name}
                    </span>
                    <span className="screen-name retweeted">
                        {'@' + rtuser.screen_name}
                    </span>
                </span>

           </span>
        );
    }
}

export default Tweet;
