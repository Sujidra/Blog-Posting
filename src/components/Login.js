import React from "react";
import md5 from "md5";
import { connect } from "react-redux";
import startLogin from "../store/Actions/LoginAction"
import { startSetBlog } from "../store/Actions/blogAction";

class Login extends React.Component{
    state={
        email:"",
        password:""
    }
    onChangeEmail=(e)=>{
        const em=e.target.value;
        this.setState(()=>{
            return{
                email:em
            }
        })
    }
    onChangePassword=(e)=>{
        const pw=e.target.value;
        this.setState(()=>{
            return{
                password:pw
            }
        })
    }
    onSubmit=(e)=>{
        e.preventDefault();
        const logindata={
            email:md5(this.state.email),
            password:this.state.password
        }
        this.props.dispatch(startLogin(logindata)).then(()=>{
            this.props.dispatch(startSetBlog());
        })
        
    }

    render(){
        return(
            <div class="register">
                <div className="login_box">
                    <h2 className="signup"><center>Login</center></h2>
                                
                    {this.props.error && <p className="loginerror">{this.props.error}</p> } 
                    <form onSubmit={this.onSubmit} className="form">
                        <input className="input" type="text" placeholder="Email" value={this.state.email} onChange={(e)=>{this.onChangeEmail(e)}} />
                        <input className="input" type="password" placeholder="password" value={this.state.password} onChange={(e)=>{this.onChangePassword(e)}} />
                        <button onClick={()=>{history.push("/dashboard")}} className="loginbutton" value="submit">Submit</button>
                    </form>
                </div>
            </div>
        )
        
    }
}


const mapStoreToProps = (state)=>{
        return {error:state.loginError}
}

export default connect(mapStoreToProps)(Login);