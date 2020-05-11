import React from "react";
import {Link} from "react-router-dom"
import { connect } from "react-redux";
import DisplayBlog from "./DisplayBlog";
import {setSortBy,setText} from "../store/Actions/filterAction"
import {getVisibleBlog} from "../store/selectors/filterblogs"
class Dashboard extends React.Component {
    render(){
        let filteredBlog = getVisibleBlog(this.props.blogs,this.props.filter)
        return(
        <div>
            <div className="subhead">
                <p className="summary">Dashboard page</p>
                <Link className="createbutton" to="/create">Create Blog</Link>
            </div>
            <div className="blogfilter_container">
                <input className="searchbox" placeHolder="Seach text" type="text" value={this.props.filter.text} onChange={(e)=>{
                    this.props.dispatch(setText({text:e.target.value}))}}>
                </input>
                <select className="sortbox" value={this.props.filter.sortBy} onChange={(e)=>{this.props.dispatch(setSortBy({sortBy:e.target.value}))}}>
                    <option value="lastedit">Last Edit</option>
                    <option value="createdAt">Create Date</option>
                </select>
            </div>
            <div className="box">
                <div className="listheading">
                    <p>Blogs</p>
                </div>
           
        
                {filteredBlog.map((blog)=>{
                    return <DisplayBlog key={blog.blogid} {...blog}/>
                })}
            </div>

            
        </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        blogs:state.blog,
        filter:state.filter
    }
}
export default connect(mapStateToProps)( Dashboard);