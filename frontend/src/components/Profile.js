//Profile Component (contains basic profile information)

import React from 'react';
import DefaultProfileImage from './defaultProfileImage'; // Import a default profile image

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profileData: {
                name: 'John Doe', // Example name
                username: 'johndoe', // Example username
                pronouns: 'he/him', // Example pronouns
                bio: 'Music lover and aspiring musician. Always looking for new sounds!', // Example bio
                socialLinks: [
                    { platform: 'Twitter', url: 'https://twitter.com/johndoe' },
                    { platform: 'LinkedIn', url: 'https://linkedin.com/in/johndoe' },
                    { platform: 'Website', url: 'https://johndoe.com' },
                ], // Example social links
                profileImage: null, // Placeholder for profile image
            },
        };
    }

    render() {
        const { profileData } = this.state;
        const { profileImage, name, username, pronouns, bio, socialLinks } = profileData;

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
                        {socialLinks.map((link, index) => (
                            <li key={index}>
                                <a href={link.url} target="_blank" rel="noopener noreferrer">
                                    {link.platform}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Profile;