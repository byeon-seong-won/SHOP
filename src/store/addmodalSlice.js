
import {createSlice} from '@reduxjs/toolkit'

// 상세페이지 장바구니 담기 모달창
const addmodalinitialState = {
    status : false
}
let addmodalSlice = createSlice({
  name : 'addmodal',
  initialState : addmodalinitialState,
  reducers : {
    addModal(state,status) {
       return state = status.payload
    }
  }
})

export default addmodalSlice 