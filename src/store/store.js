import {configureStore } from '@reduxjs/toolkit'
import addmodalSlice from './addmodalSlice'
import movemodalSlice from './movemodalSlice'
import loginmodalSlice from './loginmodalSlice'
import cartSlice from './cartSlice'
import delmodalSlice from './delmodalSlice'


  const store =  configureStore ({
    reducer : {
        cart : cartSlice.reducer,
        addmodal : addmodalSlice.reducer,
        delmodal : delmodalSlice.reducer,
        movemodal : movemodalSlice.reducer,
        loginmodal : loginmodalSlice.reducer,
    }
  })


  export const addmodalActions = addmodalSlice.actions
  export const movemodalActions = movemodalSlice.actions
  export const delmodalActions = delmodalSlice.actions
  export const loginmodalActions = loginmodalSlice.actions
  export const cartActions = cartSlice.actions
  export default store;

 