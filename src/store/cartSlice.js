import {createSlice} from '@reduxjs/toolkit'



// 장바구니 상품
const cartinitialState = [
  {id : 0, name : 'THERE THERE Music Pub', count :1, price :1000},
  {id : 1, name : "lake house", count : 1, price :2000}
]




let cartSlice = createSlice({
  name : 'cart',
  initialState : cartinitialState,
  reducers : {

    incCount(state, action) {
        const arr = [...state]
        let idx = state.findIndex((a)=>{ return a.id === action.payload })
        state[idx].count++;
    },

    decCount(state, action) {
      let idx = state.findIndex((a)=>{ return a.id === action.payload })
      state[idx].count--
      if(state[idx].count < 1) {
        alert('삭제버튼으로 항목을 삭제해주세요.')
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
    }, 
    // prototal(state,action) {
    //   const arr = [...state]
    //   let idx = state.findIndex((a)=>{ return a.id === action.payload.id })
    //   state[idx].price = state[idx].count *  action.payload.price;
    // }

 

  }
})






  export default cartSlice