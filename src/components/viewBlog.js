import React from "react";
import {connect} from "react-redux"
import { Link } from "react-router-dom";
const viewBlog = (props)=>{
    return(
        <div>
            <div className="viewheader">
                <h2><center>{props.blog.title}</center></h2>
            </div>
            <div class="viewbody">
                <p>{props.blog.content}</p>
            </div>

            <Link className="removeblog" to="/dashboard">Back</Link>
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