export const Logout =()=>{
    localStorage.setItem("id","")
    return{
        type:"LOGOUT",
        id:""
    }
    }

export const logoutblog = ()=>{
    return {
        type:"SETBLOG",
        blogs:[]
    }
}
