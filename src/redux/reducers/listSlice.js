import { createSlice } from "@reduxjs/toolkit"
import { songData } from "../../data/data"

const initialState={
    value:songData
}

const listSlice=createSlice({
    name:"list",
    initialState,
    reducers:{
        changePlayList:(state,action)=>{
            state.value=action.payload
        },
        addSong:(state,action)=>{
            state.value = state.value.concat(action.payload)
        }
    }
})

export const {changePlayList,addSong}=listSlice.actions
export default listSlice.reducer