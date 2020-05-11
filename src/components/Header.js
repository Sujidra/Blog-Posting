import React from "react";
import { Link } from 'react-router-dom';
import {Logout, logoutblog} from "../store/Actions/LogoutActions"
import {connect} from "react-redux"
//import {logout} from "./store/Actions/loginAction"
//import {connect} from "react-redux"

/*const Header = (props) =>(
    <div className="header">
        <Link class="headtitle" to="/dashboard">Expensify</Link>
        <button className="logout" onClick={props.dispatch(logout)}>Logout</button>
    </div>
    
);
export default connect()(Header);
*/

const Header =(props) =>{
    return(
        <div>
            <h1>Header</h1>
            <button onClick={()=>{
                props.dispatch(Logout())
                props.dispatch(logoutblog())}}>Logout</button>
       </div>

    )
}
export default connect()(Header);