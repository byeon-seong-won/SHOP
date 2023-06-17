// import { useReducer } from 'react';
import {INCREASE} from './acions/index'
import {initialState} from './acions/index.js'


// useReducer (수량 따른 금액 변화)

// const useCounter = () => {
//     const reducer = (state, action) => {
//       if(action == "plusProduct") {
//         state = {
//           ...state,
//           count : state.count + 1
//         };
//       }
//       if(action == "minusProduct") {
//         state = {
//           ...state,
//           count : state.count - 1
//         };
//       }
//       return state;
//     }

//   const [state, dispatch] = useReducer(reducer, {
//     count : 0
//   })
  
//   return {
//     state,
//     action : dispatch
//   }
// }
  
//   export default useCounter




// reducer
const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      let idx = state.items.findIndex(
        (el) => el.itemId == action.payload.itemId
      );
      if(idx !== -1) {
        state.items[idx].count ++;
      }
      return Object.assign({}, state, {
        items : [...state.items],
      })
  }
}


export default itemReducer;