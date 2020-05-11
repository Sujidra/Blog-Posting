import React from "react";
import { Router, Route, Switch,link, NavLink } from 'react-router-dom';
import createHistory from "history/createBrowserHistory"
import Header from "../components/Header"
import Register from "../components/register"
import Login from "../components/Login"
import CreateBlog from "../components/createBlog"
import PrivateRoute from "./PrivateRoute"
import PublicRoute from "./PublicRoute"
import EditBlog from "../components/EditBlog"
import Dashboard from "../components/Dashboard"
import viewBlog from "../components/viewBlog"

export const history=createHistory();

const Routes= () =>{
return (

    <Router history={history}>
        
        <Switch>
            <PublicRoute path="/" component={Register} exact={true}/>
            <PublicRoute path="/login" component={Login} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/create" component={CreateBlog} />
            <PrivateRoute path="/view/:blogid" component={viewBlog} />
            <PrivateRoute path="/edit/:blogid" component={EditBlog} />
        </Switch>
    </Router>

    /*<Router history={history}>
        <div>
                    
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} exact={true}/>
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={ExpenseEditPage} />
                <PrivateRoute component={Error} />
            </Switch>
        </div>
    </Router>*/
)
};
export default Routes;