import {configureStore, createSlice} from '@reduxjs/toolkit'
import modalSlice from './firmodalSlice'
import secomodalSlice from './secomodalSlice'
import { cartSlice, moneySlice } from './cartSlice'
import desmodalSlice from './descmodalSlice'

  const store =  configureStore ({
    reducer : {
        cart : cartSlice.reducer,
        modal : modalSlice.reducer,
        desmodal : desmodalSlice.reducer,
        secomodal : secomodalSlice.reducer,
        prototal : moneySlice.reducer,
    }
  })

  export const modalActions = modalSlice.actions
  export const secomodalActions = secomodalSlice.actions
  export const desmodalActions = desmodalSlice.actions
  export const cartActions = cartSlice.actions
  export const moneyActions = moneySlice.actions
  export default store;

 