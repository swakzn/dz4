import React from 'react';
import { useSelector } from 'react-redux';

const UserDisplay = () => {
    const users = useSelector((state) => state.userReducer.users);

    return (
        <div>
            <h2>User Data</h2>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        <strong>Name:</strong> {user.name}, <strong>Email:</strong> {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserDisplay;