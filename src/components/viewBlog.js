import React from "react";
import {connect} from "react-redux"
import { Link } from "react-router-dom";
const viewBlog = (props)=>{
    return(
        <div>
            <h2><center>{props.blog.title}</center></h2>
            <p>{props.blog.content}</p>
            <Link to="/dashboard">Back</Link>
        </div>
    )
}
const MapStateToProps=(state,props)=>{
    return {
        blog:state.blog.find((blogchild)=>{
            return blogchild.blogid===props.match.params.blogid
        })
    }
}
export default connect(MapStateToProps)(viewBlog);