// Playlist.js
import React from 'react';
import { Link } from 'react-router-dom';
import Playlists from '../components/Playlist';
import Header from '../components/Header';

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
                <Header />
                <h2>Your Playlists</h2>
                <div className="playlist-grid">
                    <ul>
                        {playlists.map((playlist, i) => (
                            <li key={index}>
                                <Link to={`/playlist/${playlist.id}`}><Playlists key={i} playlist={playlist} /></Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Playlist;
