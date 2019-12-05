import React from 'react';
import 'bootstrap'

class Tweet extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
                <li>user: {this.props.user}</li>
                <li>image: {this.props.image}</li>
                <li>time: {this.props.time}</li>
                <li>location: {this.props.location}</li>
                <li>text: {this.props.text}</li>
            </ul>
        );
    }
}

export default Tweet;
