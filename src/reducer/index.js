import cartReducer from "./cartReducer";
import modalReducer from "./modalReducer";
import hvmodalReducer from "./modalReducer";
import { combineReducers } from "@reduxjs/toolkit";



const rootReducer = combineReducers( {
    cartReducer,
    modalReducer,
    hvmodalReducer,
});


export default rootReducer;