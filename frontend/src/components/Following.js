/**Follower / Following Components (displays all users that are following /
followed by the current user (hint: profile preview components) - this can be
one component that handles the display of both, or a separate component for
each) */

import React from 'react';
import ProfilePreview from './ProfilePreview'; // Assuming you have a ProfilePreview component

const Following = ({ following }) => {
    return (
        <div className="following-list">
            <h3>Following</h3>
            {following.length > 0 ? (
                <ul>
                    {following.map((user, index) => (
                        <li key={index}>
                            <ProfilePreview {...user} /> {/* Pass the user object to the ProfilePreview component */}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Not following anyone yet.</p>
            )}
        </div>
    );
};

export default Following;