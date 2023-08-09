import {createSlice} from '@reduxjs/toolkit'



// 총금액 계산
const totalmoneyinitialState = {
  list: [],
  total: '',
}
let moneySlice = createSlice({
  name : 'money',
  initialState : totalmoneyinitialState,
  reducers : {
    prototal(state, action) {
      const arr = [...action.payload];
      state.list.push({
        price: arr.price,
        count : arr.count,
        // total : price * count
      })
      state.total = state.total + state.list.total;
    }
  }
})






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
        const arr = [...state]
        let idx = state.findIndex((a)=>{ return a.id === action.payload })
        state[idx].count++;
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
  }
})






  export {cartSlice, moneySlice} 