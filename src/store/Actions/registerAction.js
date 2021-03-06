import firebase from "../../firebase/firebas"


export const register =({success})=>{
return{
    type:"REGISTERED",
    success
}
}

const startRegister =({username,email,password,hash})=>{
    const userdata={
        username,
        email,
        password
    }
    
    return(dispatch)=>{
        return firebase.database().ref(`users/${hash}`).set(userdata).then((ref)=>{
            let registerdata={
                success:true
            }
            dispatch(register(registerdata))
        })

    }
}
export default startRegister;