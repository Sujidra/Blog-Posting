import React from "react"
import moment from "moment"
import { Link } from "react-router-dom"
const DisplayBlog =(props)=>{
    return(
        <div>
            <Link to={`/view/${props.blogid}`}>{props.title}</Link>
            <p>Created at {moment(props.createdAt).format("MMMM Do YYYY")}</p>
            Last edit {moment(props.editedAt).fromNow()}
            <Link to={`/edit/${props.blogid}`}>Edit</Link>
        </div>
    )
} 
export default DisplayBlog;