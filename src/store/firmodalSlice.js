import {configureStore, createSlice} from '@reduxjs/toolkit'


// 상세페이지 장바구니 담기 모달창
let modal = createSlice({
    name : 'modal',
    initialState : false,
    reducers : {
      modalOpen(state,status) {
         return state = status.payload
      }
    }
  })
  export default modal 