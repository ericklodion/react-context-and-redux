import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/userSlice';

const User = () => {

    const userName = useSelector(selectUser);

    return (
        <div>
            <h1>User: {userName}</h1>
        </div>
    );
}

export default User;