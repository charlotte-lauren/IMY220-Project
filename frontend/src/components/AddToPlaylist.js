/*
Component to add a song to a playlist (the context menu that contains all the
information to let a user add a song to a playlist - the adding functionality
does not need to be implemented yet)
*/
import React  from 'react';

const AddToPlaylist = ({ songTitle, playlists }) => {
    // Create a ref for the select input
    const playlistSelectRef = useRef(null);

    function handleSubmit(e) {
        e.preventDefault();
        const selectedPlaylist = playlistSelectRef.current.value; // Get the selected playlist from the ref

        if (selectedPlaylist) {
            // Here you would implement the functionality to add the song to the selected playlist
            console.log(`Adding "${songTitle}" to "${selectedPlaylist}"`);
            // Optionally reset the selection after submission
            playlistSelectRef.current.value = ''; // Reset the select input
        }
    }

    return (
        <div className="add-to-playlist">
            <h4>Add "{songTitle}" to Playlist</h4>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="playlist">Select Playlist:</label>
                    <select
                        id="playlist"
                        ref={playlistSelectRef} // Attach the ref to the select element
                        required
                    >
                        <option value="">--Select a Playlist--</option>
                        {playlists.map((playlist, index) => (
                            <option key={index} value={playlist}>
                                {playlist}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit">Add to Playlist</button>
            </form>
        </div>
    );
};

export default AddToPlaylist;
