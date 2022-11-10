import { createSlice } from '@reduxjs/toolkit'

const userInfo = JSON.parse(localStorage.getItem("user")) || {};

const initialState = {
    userData: userInfo,
}

export const mhooSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setData: (state, action) => {
            state.userData = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setData } = mhooSlice.actions

export default mhooSlice.reducer