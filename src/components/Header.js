import React from "react";
import { Link } from 'react-router-dom';
import {Logout, logoutblog} from "../store/Actions/LogoutActions"
import {connect} from "react-redux"

const Header =(props) =>{
    return(
        <div className="header">
            <h1 className="headtile">Blog Creater</h1>
            <button className="logout" onClick={()=>{
                props.dispatch(Logout())
                props.dispatch(logoutblog())}}>Logout</button>
       </div>

    )
}
export default connect()(Header);