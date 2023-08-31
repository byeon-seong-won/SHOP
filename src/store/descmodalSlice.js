
import {createSlice} from '@reduxjs/toolkit'

// 상세페이지 장바구니 담기 모달창
const desmodalinitialState = {
    status : false,
    id : ''
}
let desmodalSlice = createSlice({
  name : 'desmodal',
  initialState : desmodalinitialState,
  reducers : {
    desmodalOpen(state,action) {
       return setUsers(users.concat(user));
    }
  }
})

export default desmodalSlice 