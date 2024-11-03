/** Component to add a comment (contains all required information to add a
comment) */

import React from 'react';

class AddComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            image: null,
            timestamp: null, // Add timestamp state
        };

        // Create refs for textarea and file input
        this.textareaRef = React.createRef();
        this.fileInputRef = React.createRef();

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTextChange(event) {
        this.setState({ text: event.target.value });
    }

    handleFileChange(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                this.setState({ image: reader.result });
            };
            reader.readAsDataURL(file);
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const { text, image } = this.state;
        const comment = {
            text,
            username: this.props.username, // Assuming username is passed in as a prop
            timestamp: new Date().toISOString(), // Set the timestamp when the comment is created
            image,
            likes: 0,
            pinned: false,
        };
        this.props.onAddComment(comment); // Pass the new comment to the parent component
        
        // Reset form state
        this.setState({ text: '', image: null });

        // Reset the textarea and file input
        this.textareaRef.current.value = '';
        this.fileInputRef.current.value = '';
        this.setState({ image: null }); // Clear the image state
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="add-comment-form">
                <textarea
                    ref={this.textareaRef}
                    value={this.state.text}
                    onChange={this.handleTextChange}
                    placeholder="Add a comment..."
                    required
                />
                <input
                    ref={this.fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={this.handleFileChange}
                />
                <button type="submit">Post Comment</button>
            </form>
        );
    }
}

export default AddComment;