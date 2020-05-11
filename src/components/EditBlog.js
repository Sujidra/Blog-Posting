import React from "react"
import { connect } from "react-redux";
import { startEditBlog, startRemoveBlog } from "../store/Actions/blogAction";
import BlogForm from "../components/BlogForm"
const EditBlog =(props)=>{
    return(
        <div>
            <h1>This is edit page</h1>
            <BlogForm blog={props.blog} onSubmit={(blog)=>{props.dispatch(startEditBlog(props.blog.blogid,blog))}} />
            <button onClick={(e)=>{props.dispatch(startRemoveBlog(props.blog.blogid)) 
            props.history.push("/dashboard")}}>Remove Blog</button>
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
export default connect(MapStateToProps)(EditBlog);