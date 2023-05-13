import { createSlice } from '@reduxjs/toolkit'

const usersSlice = createSlice({
    name: 'user',
    initialState: {
        users: [],
        isLoading: true,
        error: undefined,
    },
    extraReducers: {}
})

export default usersSlice.reducer;
