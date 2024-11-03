/*
Feed Component (displays the song / playlist preview components - this can
be one component that handles the display of both feeds, or a separate
component for each)
*/
import React from 'react';
import Song from './Song'; // Assuming you have a SongPreview component

class SongFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            songs: [], // This will hold the songs data
        };
    }

    componentDidMount() {
        // Fetch songs from an API or context (for now, let's assume it's passed as props)
        this.setState({ songs: this.props.songs });
    }

    render() {
        return (
            <div className="song-feed">
                <h2>Song Feed</h2>
                {this.state.songs.length > 0 ? (
                    this.state.songs.map((song, index) => (
                        <Song key={index} song={song} />
                    ))
                ) : (
                    <p>No songs available.</p>
                )}
            </div>
        );
    }
}

export default SongFeed;
