import { useReducer } from 'react';



// useReducer (수량 따른 금액 변화)

const priceCounter = () => {
    const reducer = (state, action) => {
      if(action == "plusProduct") {
        state = {
          ...state,
          count : state.count + 1,
          price : state.price + price
        };
      }
      if(action == "minusProduct") {
        state = {
          ...state,
          count : state.count - 1,
          price : state.price - price
        };
      }
      return state;
    }

  // const initialState = {
  //   oneprocount : 0,
  //   twoprocount : 1000
  // };
  
  const [state, dispatch] = useReducer(reducer, {
    count : 0,
    price : 1000
  })
  
  return {
    state,
    action : dispatch
  }
}
  
  export default priceCounter