import React, { useEffect, useState } from 'react';
import PreviewPlaylist from './PreviewPlaylist';

function PlaylistFeed({ currentUser }) {
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPlaylistActivities = async () => {
            if (!currentUser || !currentUser.id) {
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(`/api/playlists/activities?user=${currentUser.id}`);
                const data = await response.json();
                const sortedActivities = data.sort((a, b) => new Date(b.date) - new Date(a.date));
                setActivities(sortedActivities);
            } catch (error) {
                console.error('Error fetching playlist activities:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPlaylistActivities();
    }, [currentUser]);

    if (loading) {
        return <div>Loading...</div>; // Optional loading state
    }

    if (!currentUser || !currentUser.id) {
        return <div>No user data available</div>; // Handle missing user
    }

    return (
        <div className="playlist-feed">
            {activities.map((activity, i) => (
                <PreviewPlaylist key={i} activityData={activity} />
            ))}
        </div>
    );
}

export default PlaylistFeed;
