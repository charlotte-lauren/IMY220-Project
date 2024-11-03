/** Component to list all of the comment components */

import React from 'react';
import Comment from './Comment';
import AddComment from './AddComment';

class CommentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: this.props.comments,
            showMore: false, // To toggle displaying more comments
        };

        this.toggleShowMore = this.toggleShowMore.bind(this);
        this.handleAddComment = this.handleAddComment.bind(this);
    }

    toggleShowMore() {
        this.setState((prevState) => ({ showMore: !prevState.showMore }));
    }

    handleAddComment(newComment) {
        this.setState((prevState) => ({
            comments: [...prevState.comments, newComment],
        }));
    }

    render() {
        const { comments } = this.props;
        const { showMore } = this.state;

        // Display the comments to show initially (e.g., the first 5)
        const displayedComments = showMore ? comments : comments.slice(0, 5);

        return (
            <div className="comments-list">
                <h3>Comments</h3>
                <AddComment onAddComment={this.handleAddComment} username={this.props.username} />
                {displayedComments.map((comment, index) => (
                    <Comment key={index} {...comment} />
                ))}

                {comments.length > 5 && (
                    <button onClick={this.toggleShowMore}>
                        {showMore ? 'Show Less' : 'Show More'}
                    </button>
                )}
            </div>
        );
    }
}

export default CommentList;