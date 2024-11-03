/**Components to list playlists / songs on the users’ profile (you could make use
of the Feed component for this if done correctly, however it is up to you on
how you manage this functionality). */
// ListSongs.js

import React from 'react';
import Song from './Song'; // Assuming you have a Song component to display individual songs

const ListSongs = ({ songs, currentUser }) => {
    // Filter songs to only include those added by the current user
    const userSongs = songs.filter(song => song.addedBy === currentUser.id);

    return (
        <div className="list-songs">
            <h3>Your Songs</h3>
            {userSongs.length > 0 ? (
                <ul>
                    {userSongs.map((song, index) => (
                        <li key={index}>
                            <Song {...song} /> {/* Pass the song object to the Song component */}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No songs available.</p>
            )}
        </div>
    );
};

export default ListSongs;
