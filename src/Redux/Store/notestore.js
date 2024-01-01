
//import * as redux from "redux";

import { configureStore } from "@reduxjs/toolkit";

import { Reducer} from "../Reducers/notereducrs";
// export const store=redux.createStore(noteReducer);

export const store=configureStore({
    reducer:{
         Reducer,
    }
})