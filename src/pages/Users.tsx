import React from 'react';
import { useAppSelector } from '../app/store.ts';

const Users = () => {
    const users = useAppSelector(state => state.user.users)
    console.log(users)
    return (
        <div>
            users
        </div>
    );
};

export default Users;