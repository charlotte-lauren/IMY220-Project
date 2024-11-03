import React from 'react';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import EditProfile from '../components/EditProfile';
import ListPlaylists from '../components/ListPlaylists';
import ListSongs from '../components/ListSongs';
import Followers from '../components/Followers';
import Following from '../components/Following';
import defaultProfileImage from '../components/defaultProfileImage';

const placeholderImages = [
    'placeholder1.jpg',
    'placeholder2.jpg',
    'placeholder3.jpg', // Add paths to your actual placeholder images
];

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            profileImage: null,
            userInfo: {
                name: 'John Doe',
                username: 'johndoe',
                pronouns: 'he/him',
                bio: 'Music lover and playlist curator.',
                socialLinks: {
                    facebook: 'https://facebook.com/johndoe',
                    twitter: 'https://twitter.com/johndoe',
                },
            },
            playlists: [],
            friends: [],
            isFriends: true,
        };
        this.toggleEdit = this.toggleEdit.bind(this);
        this.handleImageDrop = this.handleImageDrop.bind(this);
        this.fetchProfileData = this.fetchProfileData.bind(this);
    }

    async componentDidMount() {
        await this.fetchProfileData();
    }

    async fetchProfileData() {
        const { profileId } = this.props.params;
        if (profileId) {
            // Fetch user data and playlists based on profileId
            // Set the state accordingly
            console.log(`Fetching data for profile ID: ${profileId}`);
            // Example fetch calls:
            // const userResponse = await fetch(`/api/users/${profileId}`);
            // const userData = await userResponse.json();
            // this.setState({ userInfo: userData });
            // const playlistsResponse = await fetch(`/api/users/${profileId}/playlists`);
            // const playlistsData = await playlistsResponse.json();
            // this.setState({ playlists: playlistsData });
        } else {
            console.log("Displaying default profile");
            // Display a default profile or prompt for selection
        }
    }

    toggleEdit() {
        this.setState((prevState) => ({
            editing: !prevState.editing,
        }));
    }

    handleImageDrop(event) {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
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
        const displayImage = profileImage || defaultProfileImage[Math.floor(Math.random() * defaultProfileImage.length)];

        return (
            <div className="profile-page" onDrop={this.handleImageDrop} onDragOver={(e) => e.preventDefault()}>
                <Header />
                <header className="profile-header">
                    <h1>{userInfo.name}</h1>
                    <h2>@{userInfo.username}</h2>
                    <img src={displayImage} alt="Profile" className="profile-image" />
                    <button onClick={this.toggleEdit}>{editing ? 'Cancel Editing' : 'Edit Profile'}</button>
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
                    <ListPlaylists playlists={this.state.playlists} />
                    <ListSongs />
                </section>
            </div>
        );
    }
}

function WithProfileProps(Component) {
    return (props) => <Component {...props} params={useParams()} />;
}

export default WithProfileProps(Profile);
