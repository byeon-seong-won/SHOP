import {createSlice} from '@reduxjs/toolkit'


// 상세페이지 장바구니 이동 모달창

const movemodalinitialState = {
  status : false
}
let movemodalSlice = createSlice({
  name : 'movemodal',
  initialState : movemodalinitialState,
  reducers : {
    moveModal(state, status) {
      return state = status.payload
    }
  }
})
  
  export default movemodalSlice 
  
  