/**
 * Feed Component (displays the song / playlist preview components - this can
be one component that handles the display of both feeds, or a separate
component for each)
 */

// PlaylistFeed.js
import React, { useEffect, useState } from 'react';
import PreviewPlaylist from './PreviewPlaylist'; // Assume PreviewPlaylist accepts playlist activity data as props

function PlaylistFeed({ currentUser }) {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // Fetch playlist activity for the current user's friends
    const fetchPlaylistActivities = async () => {
      try {
        const response = await fetch(`/api/playlists/activities?user=${currentUser.id}`); // Replace with actual endpoint
        const data = await response.json();
        // Assuming data is an array of activity objects with date, sort in reverse chronological order
        const sortedActivities = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setActivities(sortedActivities);
      } catch (error) {
        console.error('Error fetching playlist activities:', error);
      }
    };
    
    fetchPlaylistActivities();
  }, [currentUser.id]);

  return (
    <div className="playlist-feed">
      {activities.map((activity, i) => (
        <PreviewPlaylist key={i} activityData={activity} />
      ))}
    </div>
  );
}

export default PlaylistFeed;
