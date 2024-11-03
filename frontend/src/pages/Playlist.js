// Playlist.js

import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Playlists from '../components/Playlist';
import Header from '../components/Header';

class Playlist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playlists: [],
        };
    }

    componentDidMount() {
        const { playlistId } = this.props.params;
    
        if (playlistId) {
            console.log(`Playlist ID from URL: ${playlistId}`);
            // Load specific playlist based on playlistId
        } else {
            console.log("Showing default playlist list");
            // Load a list of all playlists or handle as a default view
        }
    }

    fetchPlaylists = () => {
        const mockPlaylists = [
            {
                playlistId: 1,
                name: 'Chill Vibes',
                description: 'A relaxing mix of chill music.',
                genre: 'Chill',
                coverImage: 'link_to_image_1',
            },
            {
                playlistId: 2,
                name: 'Workout Hits',
                description: 'High energy songs to pump you up!',
                genre: 'Workout',
                coverImage: 'link_to_image_2',
            },
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
                        {playlists.map((playlist, index) => (
                            <li key={index}>
                                <Link to={`/playlist/${playlist.playlistId}`}>
                                    <Playlists playlist={playlist} />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

function WithPlaylistProps(Component) {
    return (props) => <Component {...props} params={useParams()} />;
}

export default WithPlaylistProps(Playlist);
