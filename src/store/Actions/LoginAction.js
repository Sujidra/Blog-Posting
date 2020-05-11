import firebase from "../../firebase/firebas"
import { startSetBlog } from "./blogAction"


export const successLogin =(id)=>{
return{
    type:"SUCCESS",
    id
}
}

export const loginError =()=>{
    return{
        type:"ERROR",
        error:"Please enter valid username and password"
    }
    }

export const noError =()=>{
    return{
        type:"NOERROR",
        error:""
    }
    }
    

export const failedLogin =(id)=>{
    return{
        type:"FAILED",
        id
    }
    }

const startLogin =({email,password})=>{
    /*const logindata={
        email,
        password
    }*/
    return(dispatch)=>{
        return firebase.database().ref(`users/${email}`).once("value").then((snapshot)=>{
            let orgipassword=snapshot.val().password;
            if(password===orgipassword){
                let loginid=JSON.stringify(email)
                localStorage.setItem("id",loginid);
                loginid=JSON.parse(loginid)
                dispatch(successLogin(loginid))
                dispatch(noError())
            }else{
                const loginid=""
                localStorage.setItem("id","");
                dispatch(loginError(loginid))
                dispatch(failedLogin())
            }
            
        }).catch((e)=>{
            dispatch(loginError())
            dispatch(failedLogin())
        })

    }
}
export default startLogin;