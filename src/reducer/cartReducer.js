
// const cartinitialState = ({
//     cart : [
//       {
//         id : 0,
//         name : 'THERE THERE Music Pub',
//         count : 1,
//         price :1000
//       },
//       {
//         id : 1,
//         name : 'lake house',
//         count : 1,
//         price :2000
//       }
//     ]
//   });


// const cartReducer = (state = cartinitialState, action) => {
//   switch(action.type) {
//     case "DECREASE" :
//       let num = state.findIndex((a)=>{ return a.id === action.payload })
//       return {
//         ...state,

//       }
//     case "INCREASE" :
//         let idx = state.items.findIndex(
//             (el) => el.itemId == action.payload.itemId
//         );
//         if(idx !== -1) {
//             state.items[idx].count ++;
//         }
//         return Object.assign({}, state, {
//             items : [...state.items],
//         })

//   // 장바구니 상품 담기
//   default :
//     return state;
// }
// }


// export default cartReducer
