
import {configureStore, createSlice} from '@reduxjs/toolkit'
  
  // 상세페이지 장바구니 이동 모달창
  let secomodal = createSlice({
    name : 'secomodal',
    initialState : 'false',
    reducers : {
      secoModal(state, status) {
        return state = status.payload
      }
    }
  })

  
  export default secomodal 
  
  