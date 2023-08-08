
import {configureStore, createSlice} from '@reduxjs/toolkit'


let cart = createSlice({
    name : 'cart',
    initialState : [
      {id : 0, name : 'THERE THERE Music Pub', count :1, price :1000},
      {id : 1, name : "lake house", count : 1, price :2000}
    ] ,
    reducers : {
      incCount(state, action){
        let idx = state.findIndex((a)=>{ return a.id === action.payload })
        state[idx].count++
        
        let plusMoney = state[idx].count * state[idx].price
        console.log(plusMoney)
        state[idx].count = plusMoney;
      },
  
      decCount(state, action){
        let idx = state.findIndex((a)=>{ return a.id === action.payload })
        state[idx].count--
        if(state[idx].count < 1) {
          // dispatch(modalOpen(true))
          alert('안됨')
          state[idx].count = 1;
        }
      },
  
      // 장바구니 상품 삭제
      remove(state, action) {
        state.splice(action.payload,1)
      },
  
      // 장바구니 상품 담기
      addItem(state,action) {
        let exi = state.findIndex( (x)=> {return x.name == action.payload.name})
        console.log('중복' + exi)
        if(exi == -1) {
          state.push(action.payload)
        } else {
          state[exi].count++
        }
      }
  
  
    }})
  
  
export default cart;