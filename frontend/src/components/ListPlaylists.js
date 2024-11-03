/**
 * Components to list playlists / songs on the users’ profile (you could make use
of the Feed component for this if done correctly, however it is up to you on
how you manage this functionality).
 */
import React from 'react';
import { Link } from 'react-router-dom';
import PreviewPlaylist from './PreviewPlaylist'; // Assuming you have a PlaylistPreview component to display individual playlists

const ListPlaylists = ({ playlists = [], currentUser }) => {
    // Filter playlists to only include those created by the current user
    const userPlaylists = playlists.filter(playlist => playlist.createdBy === currentUser.id);

    return (
        <div className="list-playlists">
            <h3>Your Playlists</h3>
            {userPlaylists.length > 0 ? (
                <ul>
                    {userPlaylists.map((playlist, index) => (
                        <li key={index}>
                            <Link to={`/playlist/${playlist.id}`}><PreviewPlaylist {...playlist} /></Link> {/* Pass the playlist object to the PlaylistPreview component */}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No playlists available.</p>
            )}
        </div>
    );
};

export default ListPlaylists;
