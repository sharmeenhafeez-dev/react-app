export const reducer = (state, action)=>{


    switch (action.type) {
        case "SIGNUP-USER":
            
           return{...state, user : action.payload}
    
        default:
            state;
    }
}