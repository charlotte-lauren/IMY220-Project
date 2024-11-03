//Profile Component (contains basic profile information)

// Profile.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DefaultProfileImage from './defaultProfileImage'; // Import a default profile image

function Profile() {
    const { id } = useParams(); // Access the dynamic ID from the URL
    const [profileData, setProfileData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch profile data based on the ID
        const fetchProfile = async () => {
            try {
                const response = await fetch(`/api/profile/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch profile data');
                }
                const data = await response.json();
                setProfileData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [id]); // Re-fetch if the ID changes

    if (loading) return <p>Loading profile...</p>;
    if (error) return <p>{error}</p>;

    const { profileImage, name, username, pronouns, bio, socialLinks } = profileData || {};

    return (
        <div className="profile">
            <div className="profile-header">
                {profileImage ? (
                    <img src={profileImage} alt="Profile" className="profile-image" />
                ) : (
                    <img src={DefaultProfileImage()} alt="Default" className="profile-image" />
                )}
                <div className="profile-info">
                    <h2>{name}</h2>
                    <h3>@{username}</h3>
                    <p>{pronouns}</p>
                    <p>{bio}</p>
                </div>
            </div>
            <div className="social-links">
                <h4>Links:</h4>
                <ul>
                    {socialLinks && socialLinks.length > 0 ? (
                        socialLinks.map((link, index) => (
                            <li key={index}>
                                <a href={link.url} target="_blank" rel="noopener noreferrer">
                                    {link.platform}
                                </a>
                            </li>
                        ))
                    ) : (
                        <p>No social links available</p>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Profile;
