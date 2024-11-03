// Playlist.js
import React from 'react';
import Playlists from '../components/Playlist';

class Playlist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playlists: [], // Array to hold playlists
        };
    }

    componentDidMount() {
        // Fetch playlists from the API or state management
        this.fetchPlaylists();
    }

    fetchPlaylists = () => {
        // Mock data fetching - replace with API call
        const mockPlaylists = [
            {
                id: 1,
                name: 'Chill Vibes',
                description: 'A relaxing mix of chill music.',
                genre: 'Chill',
                coverImage: 'link_to_image_1',
            },
            {
                id: 2,
                name: 'Workout Hits',
                description: 'High energy songs to pump you up!',
                genre: 'Workout',
                coverImage: 'link_to_image_2',
            },
            // More playlists...
        ];
        this.setState({ playlists: mockPlaylists });
    };

    render() {
        const { playlists } = this.state;
        return (
            <div className="playlist">
                <h2>Your Playlists</h2>
                <div className="playlist-grid">
                    {playlists.map((playlist, i) => (
                        <Playlists key ={i} playlist={playlist} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Playlist;
