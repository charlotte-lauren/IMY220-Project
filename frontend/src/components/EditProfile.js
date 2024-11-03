/**
 * Component to edit a profile (contains all the form information for editing the
user’s profile)
 */
import React from 'react';

class EditProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.profileData.name || '',
            username: this.props.profileData.username || '',
            pronouns: this.props.profileData.pronouns || '',
            bio: this.props.profileData.bio || '',
            socialLinks: this.props.profileData.socialLinks || [{ platform: '', url: '' }],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSocialLinkChange = this.handleSocialLinkChange.bind(this);
        this.handleAddSocialLink = this.handleAddSocialLink.bind(this);
        this.handleRemoveSocialLink = this.handleRemoveSocialLink.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSocialLinkChange(index, event) {
        const { name, value } = event.target;
        const updatedLinks = [...this.state.socialLinks];
        updatedLinks[index][name] = value;
        this.setState({ socialLinks: updatedLinks });
    }

    handleAddSocialLink() {
        this.setState((prevState) => ({
            socialLinks: [...prevState.socialLinks, { platform: '', url: '' }],
        }));
    }

    handleRemoveSocialLink(index) {
        this.setState((prevState) => ({
            socialLinks: prevState.socialLinks.filter((_, i) => i !== index),
        }));
    }

    handleSubmit(event) {
        event.preventDefault();
        const updatedProfile = {
            name: this.state.name,
            username: this.state.username,
            pronouns: this.state.pronouns,
            bio: this.state.bio,
            socialLinks: this.state.socialLinks,
        };
        this.props.onUpdateProfile(updatedProfile); // Pass updated profile data to the parent component
    }

    render() {
        const { name, username, pronouns, bio, socialLinks } = this.state;

        return (
            <form onSubmit={this.handleSubmit} className="edit-profile-form">
                <h2>Edit Profile</h2>
                <div>
                    <label>
                        Name:
                        <input type="text" name="name" value={name} onChange={this.handleChange} required />
                    </label>
                </div>
                <div>
                    <label>
                        Username:
                        <input type="text" name="username" value={username} onChange={this.handleChange} required />
                    </label>
                </div>
                <div>
                    <label>
                        Pronouns:
                        <input type="text" name="pronouns" value={pronouns} onChange={this.handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Bio:
                        <textarea name="bio" value={bio} onChange={this.handleChange} />
                    </label>
                </div>
                <h3>Social Links</h3>
                {socialLinks.map((link, index) => (
                    <div key={index} className="social-link">
                        <label>
                            Platform:
                            <input
                                type="text"
                                name="platform"
                                value={link.platform}
                                onChange={(e) => this.handleSocialLinkChange(index, e)}
                            />
                        </label>
                        <label>
                            URL:
                            <input
                                type="url"
                                name="url"
                                value={link.url}
                                onChange={(e) => this.handleSocialLinkChange(index, e)}
                            />
                        </label>
                        <button type="button" onClick={() => this.handleRemoveSocialLink(index)}>
                            Remove
                        </button>
                    </div>
                ))}
                <button type="button" onClick={this.handleAddSocialLink}>
                    Add Social Link
                </button>
                <div>
                    <button type="submit">Save Changes</button>
                </div>
            </form>
        );
    }
}

export default EditProfile;
