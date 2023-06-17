import { useDispatch } from "react-redux"



// action
export const increase = (itemId) => {
  return {
    type : "INCREASE",
    payload : {
      itemId,
      count: 1,
    }
  }
}


// dispatch

// const dispatch = useDispatch()
// dispatch(increase())





export const initialState = {
  items : [
    {
      itemId : 0,
      name : "THERE THERE Music Pub",
      count : 1,
      price : 1000
    },
  
    {
      itemId : 1,
      name : "lake house",
      count : 1,
      price : 2000
    },
  ]
}




