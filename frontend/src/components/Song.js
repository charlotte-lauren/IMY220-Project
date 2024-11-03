//Song Component (contains all required information on a single song)
import React from 'react';

class Song extends React.Component {
    constructor(props) {
        super(props);

        // Initial state with an `isDeleted` flag
        this.state = {
            isDeleted: false,
            timestamp: new Date().toISOString() // Automatically set the timestamp when the component is created
        };

        this.handleDelete = this.handleDelete.bind(this);
    }

    // Function to mark the song as deleted
    handleDelete() {
        this.setState({ isDeleted: true });
    }

    render() {
        const { name, artist, url } = this.props;
        const { isDeleted, timestamp } = this.state;

        // Detect if the URL is a Spotify link
        const isSpotify = url && url.includes('spotify.com/track');

        // Display message if the song is deleted
        if (isDeleted) {
            return (
                <div className="song deleted-song">
                    <p>{name} by {artist} (Deleted)</p>
                </div>
            );
        }

        return (
            <div className="song">
                <h4>{name}</h4>
                <p><strong>Artist:</strong> {artist}</p>
                <p><strong>Added on:</strong> {new Date(timestamp).toLocaleString()}</p>

                {/* Conditionally render the Spotify embed if the link is valid */}
                {isSpotify ? (
                    <iframe
                        src={`https://open.spotify.com/embed/track/${url.split('track/')[1].split('?')[0]}`}
                        width="300"
                        height="80"
                        frameBorder="0"
                        allow="encrypted-media"
                        title="Spotify Song Embed"
                    ></iframe>
                ) : (
                    <p>Invalid or missing Spotify link</p>
                )}

                {/* Button to delete the song */}
                <button onClick={this.handleDelete}>Delete Song</button>
            </div>
        );
    }
}

export default Song;
