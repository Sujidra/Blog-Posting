import React from "react"
import BlogForm from "./BlogForm"
import { startAddBlog } from "../store/Actions/blogAction"
import { connect } from "react-redux"
const CreateBlog =(props)=>{
    return(
        <div>
            <h1>This is create page</h1>
            <BlogForm onSubmit={(blog)=>{props.dispatch(startAddBlog(blog))}}/>
        </div>
    )
}
export default connect()(CreateBlog);