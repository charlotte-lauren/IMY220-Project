import React from 'react';

const AddSongToFavourites = ({ song }) => {
    const handleAddToFavourites = () => {
        // Mock function to simulate adding a song to favorites
        const favourites = JSON.parse(localStorage.getItem('favourites')) || [];

        // Check if the song is already in favourites
        const isAlreadyFavourite = favourites.some(fav => fav.link === song.link);
        
        if (!isAlreadyFavourite) {
            // Add the song to the favorites array
            favourites.push(song);
            // Update localStorage (or your state management solution)
            localStorage.setItem('favourites', JSON.stringify(favourites));
            alert(`Added "${song.title}" to favorites!`);
        } else {
            alert(`"${song.title}" is already in your favorites.`);
        }
    };

    return (
        <div className="add-to-favourites">
            <button onClick={handleAddToFavourites}>
                Add to Favourites
            </button>
        </div>
    );
};

export default AddSongToFavourites;
