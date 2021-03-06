import React from 'react';

function User({ user, onToggle }) {
    // if (!user) return null;
    return (
        <div>
            <div>
                <b>ID</b>: {user.id}
            </div>
            <div onClick={() => onToggle(user.username)}>
                <b>Username:</b> {user.username}
            </div>
        </div>
    );
}
User.defaultProps = {
    onToggle: () => {
        console.warn('onToggle is missing!');
    }
}
export default User;