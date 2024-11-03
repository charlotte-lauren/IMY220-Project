/*
Profile Preview Component (displays all basic information on a profile, that is
viewed in follower / following lists, search results, etc. - i.e., not the entire
profile, but a small preview of it)
*/
import React from 'react';

const ProfilePreview = ({ name, username, profileImage }) => {
    return (
        <div className="profile-preview">
            <img 
                src={profileImage || 'defaultProfileImage.png'} // Use a default image if none provided
                alt={`${name}'s profile`}
                className="profile-image"
            />
            <div className="profile-info">
                <h4 className="profile-name">{name}</h4>
                <p className="profile-username">@{username}</p>
            </div>
        </div>
    );
};

export default ProfilePreview;