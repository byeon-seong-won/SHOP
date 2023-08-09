import {configureStore, createSlice} from '@reduxjs/toolkit'
import modalSlice from './firmodalSlice'
import secomodalSlice from './secomodalSlice'
import cartSlice from './cartSlice'
import desmodalSlice from './descmodalSlice'


  const store =  configureStore ({
    reducer : {
        cart : cartSlice.reducer,
        modal : modalSlice.reducer,
        desmodal : desmodalSlice.reducer,
        secomodal : secomodalSlice.reducer
    }
  })

  export const modalActions = modalSlice.actions
  export const secomodalActions = secomodalSlice.actions
  export const desmodalActions = desmodalSlice.actions
  export const cartActions = cartSlice.actions

  export default store;

 