import {createSlice} from '@reduxjs/toolkit'



const cartinitialState = 
    [
        {id : 0, name : 'THERE THERE Music Pub', count :1, price :1000},
        {id : 1, name : "lake house", count : 1, price :2000}
    ]
let cartSlice = createSlice({
  name : 'cart',
  initialState : cartinitialState,
  reducers : {
    incCount(state, action){
      let idx = state.findIndex((a)=>{ return a.id === action.payload })
      state[idx].count++
      
      let plusMoney = state[idx].count * state[idx].price
      console.log(plusMoney)
      state[idx].price = plusMoney;
    },

    decCount(state, action){
      let idx = state.findIndex((a)=>{ return a.id === action.payload })
      state[idx].count--
    //   if(state[idx].count < 1) {
    //     alert('안됨')
    //     state[idx].count = 1;
    //   }
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


  export default cartSlice 