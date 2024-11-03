//Song Component (contains all required information on a single song)
import React from 'react';
import AddToPlaylist from './AddToPlaylist'; 
import AddToFavourites from './AddToFavourites'; 

class Song extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDeleted: false,
            showMenu: false,
            showDataPopup: false
        };

        // Bind functions to this
        this.toggleMenu = this.toggleMenu.bind(this);
        this.toggleDataPopup = this.toggleDataPopup.bind(this);
        this.deleteSong = this.deleteSong.bind(this);
    }

    toggleMenu() {
        this.setState({ showMenu: !this.showMenu });
    }

    toggleDataPopup() {
        this.setState({ showDataPopup: !this.showDataPopup });
    }

    deleteSong() {
        this.setState({ isDeleted: true });
    }

    render() {
        const { title, artist, link, dateAdded, adminUser } = this.props;
        const { isDeleted, showMenu, showDataPopup } = this.state;

        dateAdded = new Date(dateAdded).toLocaleDateString();

        if (isDeleted) {
            return <p>This song has been deleted.</p>;
        }

        return (
            <article className="song">
                <iframe
                    src={`https://open.spotify.com/embed/track/${link.split('/').pop().split('?')[0]}`}
                    width="300"
                    height="380"
                    frameBorder="0"
                    allow="encrypted-media"
                    title="Spotify Player"
                ></iframe>
                <h3>{title}</h3>
                <p>Artist: {artist} | Date Added: {dateAdded}</p>
                <button onClick={this.toggleMenu}>. . .</button>
                {showMenu && (
                    <div className="menu">
                        <AddToPlaylist songTitle={title} />
                        <AddToFavourites songTitle={title} />
                        <button onClick={this.toggleDataPopup}>View Song Data</button>
                        {adminUser && <button onClick={this.deleteSong}>Delete Song</button>}
                    </div>
                )}
                {showDataPopup && (
                    <div className="popup">
                        <h4>Song Data</h4>
                        <p>Title: {title}</p>
                        <p>Artist: {artist}</p>
                        <p>Link: {link}</p>
                        <p>Date Added: {dateAdded}</p>
                        <p>Added by: {adminUser}</p>
                        <button onClick={this.toggleDataPopup}>Close</button>
                    </div>
                )}
            </article>
        );
    }
}

export default Song;