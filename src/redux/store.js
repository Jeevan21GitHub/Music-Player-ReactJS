import { configureStore } from "@reduxjs/toolkit";
import ListReducer from "./reducers/listSlice"
import SongReducer from "./reducers/songSlice"

export const store=configureStore({
    reducer:{
        list:ListReducer,
        song:SongReducer
    }
})