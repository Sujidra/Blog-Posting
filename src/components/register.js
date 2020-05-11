import React from "react"
import { connect } from "react-redux";
import md5 from "md5";
import validator from "validator"
import startRegister from "../store/Actions/registerAction"
import { Link, Redirect } from "react-router-dom";
class Register extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:"",
            email:"",
            password:"",
            hash:"",
            error:"",
            successmsg:""
    }
    
    }
    onchangeUsername=(e)=>{
        const a=e.target.value;
        this.setState(()=>{
            return{username:a}
        })
    }

    onChangeEmail=(e)=>{
        const a=e.target.value;
        const h=md5(a);
        this.setState(()=>{
            return{
                email:a,
                hash:h
            }
        })
    }

    onChangePassword=(e)=>{
        const a=e.target.value;
        this.setState(()=>{
            return{password:a}
        })
    }
    submitform=(e)=>{
        //console.log(this.state.username)
        e.preventDefault();
        const checkEmail=validator.isEmail(this.state.email)
        const un=this.state.username;
        const pw=this.state.password;
        const email=this.state.email;
        if(un && pw && email)
        {
            if(checkEmail){
                const formdata={
                    username:this.state.username,
                    email:this.state.email,
                    password:this.state.password,
                    hash:this.state.hash
                }
                this.props.dispatch(startRegister(formdata)).then(()=>{
                    this.setState(()=>{
                        return{error:""}
                    })
                    this.props.history.push("/login");
                    
                })
                
                
            }else{
                this.setState(()=>{
                    return{error:"This is not a valid email"}
                })
            }
        }else{
            this.setState(()=>{
                return{error:"Username,password and email should not be empty"}
            })
        }
        
        
    }

    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.submitform}>
                    <input type="text"placeholder="Username" value={this.state.username} onChange={(e)=>{this.onchangeUsername(e)}}/>
                    <input type="email"placeholder="Email" value={this.state.email} onChange={(e)=>{this.onChangeEmail(e)}} />
                    <input type="password"placeholder="Password" value={this.state.password} onChange={(e)=>{this.onChangePassword(e)}} />
                    <button value="submit" >Register</button>
                </form>
                <Link to="/login">Login</Link>
            </div>
        )    
    }
}

export default connect()(Register);