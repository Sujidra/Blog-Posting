const loginReducer = (state=" ",action)  =>{
    switch(action.type){
        case "SUCCESS":{
                         return {
                             auth:true,
                             authid:action.id
                         }
                        }
        case "FAILED":return{
                    auth:false,
                    authid:action.id
                      }
        case "LOGOUT": return {
                        auth:false,
                        authid:action.id
                    }
        default:return state;

    }
    
}
export default loginReducer;