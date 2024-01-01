//import { ADD_Note ,Delete_Note, Increase_Count} from "../Actions/note";
import { createSlice } from "@reduxjs/toolkit";
//Initilaze the State

const initialState={
    notes: [
        {
            text:'Hello rahul'
        },
        {
            text:"Text 2"
        }
    ],
    count:0,
};

// export function noteReducer(state=initialState,action){
//    switch(action.type){
//     case ADD_Note:
//         return {
//             ...state,
//             notes: [
//                 ...state.notes,
//                 {
//                     text:action.text
//                 }
//             ]
//         }

//         case Delete_Note:
            
//                 state.notes.splice(action.index,1);
//                 return{
//                     ...state,
//                     notes:[
//                         ...state.notes
//                     ]
//             }
//        case Increase_Count:
//            return{
//             ...state,
//             count: state.count+1

//            }
//         default:
//         return state;
//    }


// }


const noteslice=createSlice({
    name:'note',
    initialState:initialState,
    reducers:{
        add:(state,action)=>{
            state.notes.push({
                text:action.payload
            })
        },
        delete:(state,action)=>{
            state.notes.splice(action.payload,1);
        }
    }
});

export const Reducer=noteslice.reducer;
export const actions=noteslice.actions;

   