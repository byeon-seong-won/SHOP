



const modalinitialState = {
    modal : [
      {
        status : false
      }
    ],
    secomodal : [
      {
        status : false
      }
    ]
  }
  
  
  const modalReducer = (state = modalinitialState, action) => {
    switch(action.type) {
        case "OPEN_FIRSTMO" :
            return state = action.status
        case "OPEN_SECOMO" :
            return state = action.status
        default: 
            return state
    } 
    
  }
  
  
  export default modalReducer