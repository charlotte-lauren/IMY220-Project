import React from 'react';

import EditProfile from '../components/EditProfile';
import ListPlaylists from '../components/ListPlaylists';
import ListSongs from '../components/ListSongs';
import Followers from '../components/Followers';
import Following from '../components/Following';
import defaultProfileImage from '../components/defaultProfileImage'; // Import placeholder image

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            profileImage: null, // Placeholder for user's profile image
            userInfo: {
                name: 'John Doe', // Example user info
                username: 'johndoe',
                pronouns: 'he/him',
                bio: 'Music lover and playlist curator.',
                socialLinks: {
                    facebook: 'https://facebook.com/johndoe',
                    twitter: 'https://twitter.com/johndoe',
                },
            },
            playlists: [], // To store user's playlists
            friends: [], // To store user's friends
            isFriends: true, // Example state to check friendship status
        };
        this.toggleEdit = this.toggleEdit.bind(this);
        this.handleImageDrop = this.handleImageDrop.bind(this);
    }

    toggleEdit() {
        this.setState((prevState) => ({
            editing: !prevState.editing,
        }));
    }

    handleImageDrop(event) {
        event.preventDefault();
        const file = event.dataTransfer.files[0]; // Getting the dropped file
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                this.setState({ profileImage: reader.result });
            };
            reader.readAsDataURL(file);
        }
    }

    render() {
        const { userInfo, editing, profileImage, isFriends } = this.state;

        return (
            <div className="profile-page" onDrop={this.handleImageDrop} onDragOver={(e) => e.preventDefault()}>
                <header className="profile-header">
                    <h1>{userInfo.name}</h1>
                    <h2>@{userInfo.username}</h2>
                    <img
                        src={profileImage || defaultProfileImage}
                        alt="Profile"
                        className="profile-image"
                    />
                    <button onClick={this.toggleEdit}>
                        {editing ? 'Cancel Editing' : 'Edit Profile'}
                    </button>
                </header>
                {editing ? (
                    <EditProfile userInfo={userInfo} />
                ) : (
                    <div className="profile-info">
                        <p>Pronouns: {userInfo.pronouns}</p>
                        <p>Bio: {userInfo.bio}</p>
                        <div className="social-links">
                            {Object.entries(userInfo.socialLinks).map(([platform, link]) => (
                                <a key={platform} href={link} target="_blank" rel="noopener noreferrer">
                                    {platform.charAt(0).toUpperCase() + platform.slice(1)}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
                <section className="friendship-status">
                    {isFriends ? <p>You are friends with this user.</p> : <button>Add Friend</button>}
                </section>
                <section className="friend-lists">
                    <Followers />
                    <Following />
                </section>
                <section className="user-playlists">
                    <h3>Your Playlists</h3>
                    <ListPlaylists />
                    <h3>Saved Playlists</h3>
                    {/* Assuming another component to show saved playlists */}
                    <ListSongs />
                </section>
            </div>
        );
    }
}

export default Profile;
