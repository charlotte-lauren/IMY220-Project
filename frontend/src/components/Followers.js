/**Follower / Following Components (displays all users that are following /
followed by the current user (hint: profile preview components) - this can be
one component that handles the display of both, or a separate component for
each) */

import React from 'react';
import PreviewProfile from './PreviewProfile'; // Assuming you have a ProfilePreview component

const Followers = ({ followers }) => {
    return (
        <div className="follower-list">
            <h3>Followers</h3>
            {followers.length > 0 ? (
                <ul>
                    {followers.map((follower, index) => (
                        <li key={index}>
                            <PreviewProfile {...follower} /> {/* Pass the follower object to the ProfilePreview component */}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No followers yet.</p>
            )}
        </div>
    );
};

export default Followers;