/** Playlist Component (contains all required information on a single playlist)
You would need to be able to list all of the songs (hint: song
 component) that belong to a playlist. This could be done in the playlist
 component itself, or in a separate component, depending on how you
 manage this functionality. */
 import React from 'react';
 import Song from './Song';
 import CommentsList from './CommentList';
 
 class Playlist extends React.Component {
     static genres = ['Pop', 'Rock', 'Hip-Hop', 'Jazz', 'Classical', 'Metal', 'Electronic', 'Country'];
 
     constructor(props) {
         super(props);
         
         this.state = {
             // Initialize any required state here
         };
 
         // Refs for any elements you want to reference directly
         this.coverImageInput = React.createRef();
         this.titleInput = React.createRef();
 
         // Bind methods to maintain context
         this.handleSearchHashtag = this.handleSearchHashtag.bind(this);
     }
 
     handleSearchHashtag(tag) {
         // This function is invoked when a hashtag is clicked
         this.props.onSearchHashtag(tag);
     }
 
     render() {
         const { playlist } = this.props;
 
         if (!playlist) {
             return <div>Loading playlist...</div>;
         }
 
         const { title, coverImage, category, genre, description, hashtags, songs, comments } = playlist;
 
         return (
             <div className="playlist-page">
                 {/* Header section */}
                 <div className="playlist-header">
                     <h2>{title}</h2>
                     {coverImage ? (
                         <img src={coverImage} alt="Cover" className="cover-image" />
                     ) : (
                         <div className="cover-image-placeholder">No Cover Image</div>
                     )}
                 </div>
 
                 {/* Playlist Details */}
                 <div className="playlist-details">
                     <p><strong>Category:</strong> {category}</p>
                     <p><strong>Genre:</strong> {genre || 'Unknown Genre'}</p>
                     <p><strong>Description:</strong> {description}</p>
                     
                     {/* Hashtags */}
                     <div className="hashtags">
                         <h4>Hashtags:</h4>
                         <div>
                             {hashtags.map((tag, index) => (
                                 <span 
                                     key={index} 
                                     className="hashtag" 
                                     onClick={() => this.handleSearchHashtag(tag)}
                                 >
                                     {tag}
                                 </span>
                             ))}
                         </div>
                     </div>
                 </div>
 
                 {/* Song List */}
                 <div className="playlist-songs">
                     <h3>Songs</h3>
                     <ul>
                         {songs.map((song, index) => (
                             <li key={index}>
                                 <Song {...song} />
                             </li>
                         ))}
                     </ul>
                 </div>
 
                 {/* Comments Section */}
                 <div className="comments-section">
                     <h3>Comments</h3>
                     <CommentsList comments={comments} />
                 </div>
             </div>
         );
     }
 }
 
 export default Playlist;
 