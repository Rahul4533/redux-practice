
//import * as redux from "redux";

import { configureStore } from "@reduxjs/toolkit";
import { notificationReducer } from "../Reducers/notificationReducer";
import { Reducers} from "../Reducers/notereducrs";
// export const store=redux.createStore(noteReducer);

export const store=configureStore({
    reducer:{
         Reducers,
         notificationReducer,
    },
})