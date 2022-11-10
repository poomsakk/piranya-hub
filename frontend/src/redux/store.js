import { configureStore } from '@reduxjs/toolkit'
import mhooSlice from './mhooSlice'

export const store = configureStore({
    reducer: {
        data: mhooSlice
    },
})