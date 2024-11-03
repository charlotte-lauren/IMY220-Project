/**
 * Feed Component (displays the song / playlist preview components - this can
be one component that handles the display of both feeds, or a separate
component for each)
 */

import React from 'react';
import PreviewPlaylist from './PreviewPlaylist'; // Assuming you have a PlaylistPreview component

class PlaylistFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playlists: [], // This will hold playlist activity data
        };
    }

    componentDidMount() {
        // Fetch playlist activities from an API or context
        this.setState({ activities: this.props.activities });
    }

    render() {
        return (
            <div className="playlist-feed">
                <h2>Playlist Feed</h2>
                {this.state.playlists.length > 0 ? (
                    this.state.playlists.map((playlist, index) => (
                        <PreviewPlaylist key={index} playlist={playlist}/>
                    ))
                ) : (
                    <p>No playlist activities available.</p>
                )}
            </div>
        );
    }
}

export default PlaylistFeed;