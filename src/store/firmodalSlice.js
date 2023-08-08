
import {createSlice} from '@reduxjs/toolkit'

// 상세페이지 장바구니 담기 모달창
const modalinitialState = {
    status : false
}
let modalSlice = createSlice({
  name : 'modal',
  initialState : modalinitialState,
  reducers : {
    modalOpen(state,status) {
       return state = status.payload
    }
  }
})

export default modalSlice 