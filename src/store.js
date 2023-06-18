import {configureStore, createSlice} from '@reduxjs/toolkit'
import { useDebugValue, useEffect, useReducer } from 'react'
import { useDispatch } from 'react-redux'



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
export let {modalOpen} = modal.actions


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
export let {secoModal} = secomodal.actions












let cart = createSlice({
  name : 'cart',
  initialState : [
    {id : 0, name : 'THERE THERE Music Pub', count :1, price :1000},
    {id : 1, name : "lake house", count : 1, price :2000}
  ] ,
  reducers : {

    // 장바구니 상품 수량 증가
    // incCount(state, action){
    //   let 번호 = state.findIndex((a)=>{ return a.id === action.payload })
    //   state[번호].count++
    //   state[번호].price = state[번호].price + state[번호].price
    // },

    // 장바구니 상품 수량 감소
    decCount(state, action){
      let 번호 = state.findIndex((a)=>{ return a.id === action.payload })
      state[번호].count--
      state[번호].price = state[번호].price - state[번호].price
      if(state[번호].count < 1) {
        // dispatch(modalOpen(true))
        alert('안됨')
      }
    },
    // 장바구니 상품 삭제
    remove(state, action) {
      state.splice(action.payload,1)
    },

    // 장바구니 상품 담기
    addItem(state,action) {
      let 중복 = state.findIndex( (x)=> {return x.name == action.payload.name})
      console.log('중복' + 중복)
      if(중복 == -1) {
        state.push(action.payload)
      } else {
        state[중복].count++
      }
      
    }
  }})


export let {incCount,decCount,remove,addItem,incPrice,desPrice} = cart.actions



export default configureStore ({
  reducer : {
    cart : cart.reducer,
    modal : modal.reducer,
    secomodal : secomodal.reducer
  }
})