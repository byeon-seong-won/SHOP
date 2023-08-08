import {configureStore, createSlice} from '@reduxjs/toolkit'
import modalSlice from './store/firmodalSlice'
import secomodalSlice from './store/secomodalSlice'
import cartSlice from './store/cartSlice'



  const store =  configureStore ({
    reducer : {
        cart : cartSlice.reducer,
        modal : modalSlice.reducer,
        secomodal : secomodalSlice.reducer
    }
  })

  export const modalActions = modalSlice.actions
  export const secomodalActions = secomodalSlice.actions
  export const cartActions = cartSlice.actions
  export default store;

 