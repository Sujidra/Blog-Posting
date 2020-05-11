const loginErrorReducers = (state="",action)=>{
    switch(action.type){
        case "ERROR":{
            console.log(action.error);
            return action.error;
        }
        case "NOERROR":{
            return action.error;
        }
        default : return state
    }
}
export default loginErrorReducers