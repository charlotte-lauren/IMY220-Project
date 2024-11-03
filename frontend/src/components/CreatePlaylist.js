/**Component to create a playlist (contains all the form information for adding a
playlist) */

import React from 'react';

class CreatePlaylist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            category: '',
            coverImage: null,
            showForm: false, // State to manage form visibility
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
    }

    handleInputChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleFileChange(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                this.setState({ coverImage: reader.result });
            };
            reader.readAsDataURL(file);
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const { title, description, category, coverImage } = this.state;

        const newPlaylist = {
            title,
            description,
            category,
            coverImage,
        };

        this.props.onCreatePlaylist(newPlaylist); // Call the parent method to handle playlist creation

        // Reset the form
        this.setState({
            title: '',
            description: '',
            category: '',
            coverImage: null,
            showForm: false, // Hide the form after submission
        });
    }

    toggleForm() {
        this.setState((prevState) => ({ showForm: !prevState.showForm }));
    }

    render() {
        const { showForm, title, description, category, coverImage } = this.state;

        return (
            <div className="create-playlist">
                <button onClick={this.toggleForm}>
                    {showForm ? 'Cancel' : 'Create New Playlist'}
                </button>

                {showForm && (
                    <form onSubmit={this.handleSubmit} className="create-playlist-form">
                        <div>
                            <label>
                                Title:
                                <input
                                    type="text"
                                    name="title"
                                    value={title}
                                    onChange={this.handleInputChange}
                                    required
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                Description:
                                <textarea
                                    name="description"
                                    value={description}
                                    onChange={this.handleInputChange}
                                    required
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                Category:
                                <input
                                    type="text"
                                    name="category"
                                    value={category}
                                    onChange={this.handleInputChange}
                                    required
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                Cover Image:
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={this.handleFileChange}
                                />
                                {coverImage && <img src={coverImage} alt="Cover Preview" className="cover-image-preview" />}
                            </label>
                        </div>
                        <button type="submit">Create Playlist</button>
                    </form>
                )}
            </div>
        );
    }
}

export default CreatePlaylist;
