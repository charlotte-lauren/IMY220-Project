/*
Playlist Preview Component (contains all basic information on a single
playlist that is viewed in a list, search results, or in a feed - i.e., not the entire
playlist, but a small preview of it)
*/

import React from 'react';
import PropTypes from 'prop-types';

class PlaylistPreview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        const { onSelect, playlist } = this.props;
        onSelect(playlist); // Call the onSelect function passed via props with the playlist data
    }

    render() {
        const { playlist } = this.props;

        if (!playlist) {
            return <div>No playlist available.</div>;
        }

        const { title, coverImage, description, hashtags, songs } = playlist;

        return (
            <div className="playlist-preview" onClick={this.handleClick}>
                <div className="cover-image-container">
                    {coverImage ? (
                        <img src={coverImage} alt={`${title} Cover`} className="cover-image" />
                    ) : (
                        <div className="cover-image-placeholder">No Cover Image</div>
                    )}
                </div>
                <h3>{title}</h3>
                <p>{description.length > 50 ? `${description.substring(0, 50)}...` : description}</p>
                <p><strong>Songs:</strong> {songs.length}</p>
                <div className="hashtags">
                    {hashtags.map((tag, index) => (
                        <span key={index} className="hashtag">{tag}</span>
                    ))}
                </div>
            </div>
        );
    }
}

// PropTypes for better validation and documentation
PlaylistPreview.propTypes = {
    playlist: PropTypes.shape({
        title: PropTypes.string.isRequired,
        coverImage: PropTypes.string,
        description: PropTypes.string,
        hashtags: PropTypes.arrayOf(PropTypes.string),
        songs: PropTypes.arrayOf(PropTypes.object), // You can define more specific song object shape if necessary
    }).isRequired,
    onSelect: PropTypes.func.isRequired, // Function to call when this preview is clicked
};

export default PlaylistPreview;
