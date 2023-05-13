import React from 'react'
import useSelector from 'react-redux';
import store from '../store';

export const API = () => {
    const [ users, isLoading, error ] = useSelector(store.user);
    if(isLoading) {
        return (
            <h2>Loading</h2>
        )
    };
    if(error !== null) {
        return (
            <div>Try to fixed data issue</div>
        )
    };
    users.map((user) => {
        return (
            <ul>
            <li key={user.id}>{user.name}</li>
            <li>{}user.lastName</li>
            </ul>
        )
    })
}
