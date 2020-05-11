import React from "react"
import moment from "moment"
import { Link } from "react-router-dom"
const DisplayBlog =(props)=>{
    return(
        <div className="list">
            <div className="listitem">
                <Link className="itemtitle" to={`/view/${props.blogid}`}>{props.title}</Link>
                <p className="create">Created at {moment(props.createdAt).format("MMMM Do YYYY")}</p>
                <p>Last edit {moment(props.editedAt).fromNow()}</p>
            
            </div>
            <Link className="edit" to={`/edit/${props.blogid}`}>Edit</Link>
        </div>
    )
} 
export default DisplayBlog;