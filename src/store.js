import configureStore from 'react';
import usersReducer from './redux/users/usersSlice'

const store = configureStore({
    user: usersReducer,
});

export default store;