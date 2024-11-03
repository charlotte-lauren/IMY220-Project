//Component to add a song to the website (contains all the form information to let a user add a song)
import React from 'react';

class AddSong extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.formatDate = this.formatDate.bind(this);

        this.titleInput = React.createRef();
        this.artistInput = React.createRef();
        this.linkInput = React.createRef();
    }

    formatDate(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-indexed
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        return `${day}/${month}/${year} at ${hours}:${minutes}:${seconds}`;
    }

    handleSubmit(e) {
        e.preventDefault();

        const now = new Date(); // Create a new Date object for the current time

        const newSong = {
            title: this.titleInput.current.value,
            artist: this.artistInput.current.value,
            link: this.linkInput.current.value,
            dateAdded: this.formatDate(now), // Automatically add the current date
            addedBy: this.props.currentUser // Note the user who added the song
        };

        // Call the function passed as a prop to handle adding the song
        this.props.onAddSong(newSong);

        // Clear the input fields
        this.titleInput.current.value = '';
        this.artistInput.current.value = '';
        this.linkInput.current.value = '';
    }

    render() {
        return (
            <div className="add-song-form">
                <h4>New Song:</h4>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="title">Title:</label>
                        <input type="text" ref={this.titleInput} required />
                    </div>
                    <div>
                        <label htmlFor="artist">Artist:</label>
                        <input type="text" ref={this.artistInput} required />
                    </div>
                    <div>
                        <label htmlFor="link">Spotify Link:</label>
                        <input type="url" ref={this.linkInput} required />
                    </div>
                    <div>
                        <label htmlFor="title">Added by: {this.props.currentUser}</label>
                    </div>
                    <button type="submit">Add Song</button>
                </form>
            </div>
        );
    }
}

export default AddSong;