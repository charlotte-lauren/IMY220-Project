// SongLibrary.js
import React from 'react';
import Song from '../components/Song';
import Header from '../components/Header';

class SongLibrary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            songs: [], // Array to hold songs
        };
    }

    componentDidMount() {
        // Fetch songs from the API or state management
        this.fetchSongs();
    }

    fetchSongs = () => {
        // Mock data fetching - replace with API call
        const mockSongs = [
            {
                id: 1,
                name: 'Song A',
                artist: 'Artist 1',
                url: 'https://open.spotify.com/track/1',
            },
            {
                id: 2,
                name: 'Song B',
                artist: 'Artist 2',
                url: 'https://open.spotify.com/track/2',
            },
            // More songs...
        ];
        this.setState({ songs: mockSongs });
    };

    render() {
        const { songs } = this.state;
        return (
            <div className="song-library">
                    <Header />
                <h2>Song Library</h2>
                <div className="song-grid">
                    {songs.map((song, i) => (
                        <Song key={i} song={song} />
                    ))}
                </div>
            </div>
        );
    }
}

export default SongLibrary;
