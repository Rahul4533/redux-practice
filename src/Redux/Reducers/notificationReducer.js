import { createSlice } from "@reduxjs/toolkit"
import { actions } from "./notereducrs";

const initialState={
    message: ""
}

const notificationSlice=createSlice({
    name:"notification",
    initialState:initialState,
    reducers:{
        reset:(state,action)=>{
            state.message="";
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(actions.add,(state,action)=> {state.message="Note Is Added"})
        builder.addCase(actions.delete,(state,action)=>{
            state.message="Note Is Deleted";
        })
    }

    // extraReducers: {
    //     : (state,action)=>{
    //         state.message="Note Is Added";
    //     }
    // }
        
    
})

export const notificationReducer=notificationSlice.reducer;
export const resetnotification=notificationSlice.actions;
