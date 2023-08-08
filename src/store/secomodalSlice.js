import {createSlice} from '@reduxjs/toolkit'


// 상세페이지 장바구니 이동 모달창
const secomodalinitialState = {
  status : false
}
let secomodalSlice = createSlice({
name : 'secomodal',
initialState : secomodalinitialState,
reducers : {
  secoModal(state, status) {
    return state = status.payload
  }
}
})
  
  export default secomodalSlice 
  
  