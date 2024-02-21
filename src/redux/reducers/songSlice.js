import { createSlice } from "@reduxjs/toolkit";
import { songData } from "../../data/data";


const initialState={
    value:songData[0]
}

const songSlice=createSlice({
    name:'song',
    initialState,
    reducers:{
        changeSong:(state,action)=>{
            state.value=action.payload
        }
    }
})

export const {changeSong}=songSlice.actions
export default songSlice.reducer