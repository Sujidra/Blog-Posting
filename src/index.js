
import React from "react";
import ReactDOM from "react-dom";
import Routes,{history} from "./routers/Approuter"
import {Provider} from "react-redux";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import firebase,{googleAuthProvider} from "./firebase/firebas"
import storeConfig from "./store/store_config";
import "./firebase/firebas";
import Loading from "./components/Loading";
import {successLogin, failedLogin} from "./store/Actions/LoginAction"
import { startSetBlog } from "./store/Actions/blogAction";


const store=storeConfig();

/*store.subscribe(()=>{
    let storeobj=store.getState();
    let visibility =getVisibleExpence(storeobj.expense,storeobj.filters)
    
})*/

const jsx=(
    <Provider store={store}>
        <Routes />
    </Provider>
)


let hasRendered =false;
const render = () =>{
    if(!hasRendered){
        ReactDOM.render(jsx,document.getElementById("app"));
        hasRendered=true;
    }
}



ReactDOM.render(<Loading />,document.getElementById("app"))


let id=localStorage.getItem("id");

if(id){
    id=JSON.parse(id);
    store.dispatch(successLogin(id));
    store.dispatch(startSetBlog()).then(()=>{
        render()
    })
}else{
    store.dispatch(failedLogin(id))
    render();
}

/*firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        store.dispatch(startLogin(user.uid));
        store.dispatch(startSetExpense()).then(()=>{
            render();
        })
        if(history.location.pathname==="/"){
            history.push("/dashboard");
        }
        
    }else{
        store.dispatch(startLogout());
        render();
        history.push("/");
    }
})*/
