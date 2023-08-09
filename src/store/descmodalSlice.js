
import {createSlice} from '@reduxjs/toolkit'

// 상세페이지 장바구니 담기 모달창
const desmodalinitialState = {
    status : false
}
let desmodalSlice = createSlice({
  name : 'desmodal',
  initialState : desmodalinitialState,
  reducers : {
    desmodalOpen(state,status) {
       return state = status.payload
    }
  }
})

export default desmodalSlice 