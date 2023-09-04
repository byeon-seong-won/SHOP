import {createSlice} from '@reduxjs/toolkit'


// 로그인 준비중 모달칭

const loginmodalinitialState = {
  status : false
}
let loginmodalSlice = createSlice({
  name : 'loginmodal',
  initialState : loginmodalinitialState,
  reducers : {
    loginModal(state, status) {
      return state = status.payload
    }
  }
})
  
  export default loginmodalSlice 
  
  