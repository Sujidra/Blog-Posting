import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import loginReducer from "./Reducers/IdReducers"
import registedReducer from "./Reducers/registedReducer"
import loginErrorReducer from "./Reducers/loginerrorReducers";
import blogReducer from "./Reducers/blogReducers"
import filterReducer from "./Reducers/filterReducer"


const storeConfig = ()=>{
    const store=createStore(combineReducers({
        registed:registedReducer,
        auth:loginReducer,
        loginError:loginErrorReducer,
        blog:blogReducer,
        filter:filterReducer
    }),
    applyMiddleware(thunk));
    
    return store;
}

export default storeConfig;
