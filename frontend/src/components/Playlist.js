/** Playlist Component (contains all required information on a single playlist)
You would need to be able to list all of the songs (hint: song
 component) that belong to a playlist. This could be done in the playlist
 component itself, or in a separate component, depending on how you
 manage this functionality. */
 import React from 'react';
import Song from './Song';
import CommentsList from './CommentList';

const Playlist = ({ playlist, onSearchHashtag, onAddSongToPlaylist }) => {
    // Destructure playlist data from props
    const { title, genre, description, coverImage, hashtags, songs, comments } = playlist;

    // Fallback loading message
    if (!playlist) {
        return <div>Loading playlist...</div>;
    }

    const handleHashtagClick = (tag) => {
        onSearchHashtag(tag);
    };

    return (
        <div className="playlist-page">
            {/* Header section */}
            <div className="playlist-header">
                <h2>{title || "Untitled Playlist"}</h2>
                {coverImage ? (
                    <img src={coverImage} alt="Cover" className="cover-image" />
                ) : (
                    <div className="cover-image-placeholder">No Cover Image</div>
                )}
            </div>

            {/* Playlist Details */}
            <div className="playlist-details">
                <p><strong>Genre:</strong> {genre || 'Unknown Genre'}</p>
                <p><strong>Description:</strong> {description || 'No description provided'}</p>

                {/* Hashtags */}
                <div className="hashtags">
                    <h4>Hashtags:</h4>
                    <div>
                        {hashtags && hashtags.length > 0 ? (
                            hashtags.map((tag, index) => (
                                <span 
                                    key={index} 
                                    className="hashtag" 
                                    onClick={() => handleHashtagClick(tag)}
                                >
                                    {tag}
                                </span>
                            ))
                        ) : (
                            <p>No hashtags available.</p>
                        )}
                    </div>
                </div>
            </div>

            {/* Song List */}
            <div className="playlist-songs">
                <h3>Songs</h3>
                <ul>
                    {songs && songs.length > 0 ? (
                        songs.map((song, index) => (
                            <li key={index}>
                                <Song {...song} />
                            </li>
                        ))
                    ) : (
                        <p>No songs in this playlist.</p>
                    )}
                </ul>
            </div>

            {/* Comments Section */}
            <div className="comments-section">
                <h3>Comments</h3>
                {comments && comments.length > 0 ? (
                    <CommentsList comments={comments} />
                ) : (
                    <p>No comments available.</p>
                )}
            </div>
        </div>
    );
};

export default Playlist;
