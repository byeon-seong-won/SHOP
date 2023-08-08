import { configureStore } from "@reduxjs/toolkit"
import cart from "./cartSlice"
import secomodal from "./secomodalSlice"
import modal from "./firmodalSlice"





export default configureStore ({
    reducer : {
      cart : cart.reducer,
      secomodal : secomodal.reducer,
      modal : modal.reducer
    }
  })