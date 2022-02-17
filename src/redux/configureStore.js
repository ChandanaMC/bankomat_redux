//instead of {createStote} from "redux"
import { configureStore } from "@reduxjs/toolkit";
import atmSlice from "./atmSlice"
const store = configureStore({
    //reducer here is similar to combineReducers
    reducer:{
        atm: atmSlice
    }
});

export default store;