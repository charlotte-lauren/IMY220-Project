import React from 'react';
import SongFeed from '../components/SongFeed';
import PlaylistFeed from '../components/PlaylistFeed';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showSongFeed: true, // State to toggle between song feed and playlist feed
        };
        this.toggleFeed = this.toggleFeed.bind(this);
    }

    toggleFeed() {
        this.setState((prevState) => ({
            showSongFeed: !prevState.showSongFeed,
        }));
    }

    render() {
        return (
            <div className="home-page">
                <header className="home-header">
                    <h1>Welcome Back!</h1>
                    <h2 className="tagline">Your Musical Feed Awaits</h2>
                    <button onClick={this.toggleFeed} className="toggle-feed-button">
                        {this.state.showSongFeed ? 'Show Playlist Feed' : 'Show Song Feed'}
                    </button>
                </header>
                <main className="home-content">
                    {this.state.showSongFeed ? (
                        <SongFeed />
                    ) : (
                        <PlaylistFeed />
                    )}
                </main>
            </div>
        );
    }
}

export default Home;
