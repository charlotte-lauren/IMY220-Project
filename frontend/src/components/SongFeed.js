/*
Feed Component (displays the song / playlist preview components - this can
be one component that handles the display of both feeds, or a separate
component for each)
*/
// SongFeed.js
import React, { useEffect, useState } from 'react';
import Song from './Song'; // Assume Song component accepts song data as props

function SongFeed() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    // Fetch all songs from the database in reverse chronological order
    const fetchSongs = async () => {
      try {
        const response = await fetch('/api/songs'); // Replace with actual endpoint
        const data = await response.json();
        // Assuming data is an array of song objects with date added, sort in reverse chronological order
        const sortedSongs = data.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
        setSongs(sortedSongs);
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };
    
    fetchSongs();
  }, []);

  return (
    <div className="song-feed">
      {songs.map((song, i) => (
        <Song key={i} songData={song} />
      ))}
    </div>
  );
}

export default SongFeed;
