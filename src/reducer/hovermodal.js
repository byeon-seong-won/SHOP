



const hvmodalinitialState = {
    hvmodal : [
      {
        status : false
      }
    ]
  }
  
  
  const hvmodalReducer = (state = hvmodalinitialState, action) => {
    switch(action.type) {
        case "HOVER_MO" :
            return state = action.status;
        default: 
            return state
    } 
    
  }
  
  
  export default hvmodalReducer