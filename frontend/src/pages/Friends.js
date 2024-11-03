// Friends.js
import React from 'react';
import Following from '../components/Following';
import Followers from '../components/Followers';

class Friends extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showFollowing: true, // State to toggle between Following and Followers
        };
    }

    toggleView = () => {
        this.setState((prevState) => ({
            showFollowing: !prevState.showFollowing,
        }));
    };

    render() {
        const { showFollowing } = this.state;

        return (
            <div className="friends">
                <h2>Your Friends</h2>
                <button onClick={this.toggleView} className="toggle-button">
                    {showFollowing ? 'Show Followers' : 'Show Following'}
                </button>
                {showFollowing ? <Following /> : <Followers />}
            </div>
        );
    }
}

export default Friends;
