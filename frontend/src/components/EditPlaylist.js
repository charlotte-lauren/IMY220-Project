/**
 * Component to edit a playlist (contains all the form information for editing a
playlist - this could use the same component as the one to add a playlist,
depending on how you manage this functionality
 */
import React from 'react';

class EditPlaylist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.playlist.title || '',
            description: props.playlist.description || '',
            hashtags: props.playlist.hashtags || [],
            category: props.playlist.category || '',
            selectedGenre: props.playlist.genre || 'Pop', // Default genre
            songs: props.playlist.songs || [],
            newHashtag: '',
            favoriteSongs: props.favoriteSongs || [], // Array of favorite songs to choose from
        };

        // Binding methods
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAddHashtag = this.handleAddHashtag.bind(this);
        this.handleRemoveHashtag = this.handleRemoveHashtag.bind(this);
        this.handleSongSelect = this.handleSongSelect.bind(this);
        this.handleRemoveSong = this.handleRemoveSong.bind(this);
        this.handleDeletePlaylist = this.handleDeletePlaylist.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleAddHashtag() {
        const { newHashtag, hashtags } = this.state;
        if (newHashtag.trim() && !hashtags.includes(newHashtag)) {
            this.setState((prevState) => ({
                hashtags: [...prevState.hashtags, `#${newHashtag.trim()}`],
                newHashtag: '',
            }));
        }
    }

    handleRemoveHashtag(hashtag) {
        this.setState((prevState) => ({
            hashtags: prevState.hashtags.filter((h) => h !== hashtag),
        }));
    }

    handleSongSelect(song) {
        this.setState((prevState) => ({
            songs: [...prevState.songs, song],
        }));
    }

    handleRemoveSong(song) {
        this.setState((prevState) => ({
            songs: prevState.songs.filter((s) => s.id !== song.id), // Assuming each song has a unique id
        }));
    }

    handleDeletePlaylist() {
        const { onDelete, playlist } = this.props;
        onDelete(playlist.id); // Call the delete function passed via props with the playlist id
    }

    handleSubmit(event) {
        event.preventDefault();
        const { title, description, hashtags, category, selectedGenre, songs } = this.state;
        const updatedPlaylist = {
            title,
            description,
            hashtags,
            category,
            genre: selectedGenre,
            songs,
        };
        this.props.onSave(updatedPlaylist); // Save the playlist data through props function
    }

    render() {
        const { title, description, hashtags, category, selectedGenre, songs, newHashtag, favoriteSongs } = this.state;
        const { genres } = this.props;

        return (
            <div className="edit-playlist">
                <h2>Edit Playlist</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Title:</label>
                        <input type="text" name="title" value={title} onChange={this.handleInputChange} required />
                    </div>
                    <div>
                        <label>Description:</label>
                        <textarea name="description" value={description} onChange={this.handleInputChange} required />
                    </div>
                    <div>
                        <label>Category:</label>
                        <input type="text" name="category" value={category} onChange={this.handleInputChange} />
                    </div>
                    <div>
                        <label>Genre:</label>
                        <select
                            name="selectedGenre"
                            value={selectedGenre}
                            onChange={this.handleInputChange}
                        >
                            {genres.map((genre) => (
                                <option key={genre} value={genre}>{genre}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>Hashtags:</label>
                        <div>
                            {hashtags.map((tag, index) => (
                                <span key={index} className="hashtag">
                                    {tag} <button type="button" onClick={() => this.handleRemoveHashtag(tag)}>x</button>
                                </span>
                            ))}
                        </div>
                        <input
                            value={newHashtag}
                            onChange={(e) => this.setState({ newHashtag: e.target.value })}
                            placeholder="Add hashtag"
                        />
                        <button type="button" onClick={this.handleAddHashtag}>Add Hashtag</button>
                    </div>
                    <div>
                        <h3>Current Songs:</h3>
                        <ul>
                            {songs.map((song, index) => (
                                <li key={index}>
                                    {song.title} <button type="button" onClick={() => this.handleRemoveSong(song)}>Remove</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3>Add Songs from Favorites:</h3>
                        <ul>
                            {favoriteSongs.map((song, index) => (
                                <li key={index}>
                                    {song.title} <button type="button" onClick={() => this.handleSongSelect(song)}>Add</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button type="submit">Save Changes</button>
                    <button type="button" onClick={this.handleDeletePlaylist}>Delete Playlist</button>
                </form>
            </div>
        );
    }
}

// PropTypes for better validation and documentation

export default EditPlaylist;