/** Comment Component (contains all required information on a single
comment)*/
import React from 'react';

class Comment extends React.Component {
    render() {
        const { text, username, timestamp, image, likes, pinned } = this.props;

        return (
            <div className={`comment ${pinned ? 'pinned' : ''}`}>
                <div className="comment-header">
                    <strong>{username}</strong>
                    <span className="timestamp">{timestamp}</span>
                </div>
                <div className="comment-body">
                    {image && <img src={image} alt="Comment attachment" className="comment-image" />}
                    <p>{text}</p>
                </div>
                <div className="comment-footer">
                    <span className="likes">Likes: {likes}</span>
                </div>
            </div>
        );
    }
}



export default Comment;