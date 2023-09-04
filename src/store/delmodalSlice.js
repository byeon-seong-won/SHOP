
import {createSlice} from '@reduxjs/toolkit'

// 장바구니 상품 삭제 모달창
const delmodalinitialState = {
    status : false,
}
let delmodalSlice = createSlice({
  name : 'delmodal',
  initialState : delmodalinitialState,
  reducers : {
    delModal(state, status) {
      return state = status.payload
    }
  }
})

export default delmodalSlice 