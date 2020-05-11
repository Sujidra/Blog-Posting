import React from "react";
import moment from "moment"
import { connect } from "react-redux";
import { startAddBlog } from "../store/Actions/blogAction";
import {history} from "../routers/Approuter"

class BlogForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:props.blog?props.blog.title:"",
            content:props.blog?props.blog.content:"",
            error:"",
            createdAt:props.blog?props.blog.createdAt:moment(),
            editedAt:moment()
        }
    }

onChangeTitle = (e)=>{
    const t=e.target.value
    this.setState(()=>{
        return{
            title:t
        }
    })
}

onChangeContent= (e)=>{
    const c=e.target.value
    this.setState(()=>{
        return{
            content:c
        }
    })
}

onSubmit=(e)=>{
    e.preventDefault();
    const title=this.state.title;
    const content=this.state.content;
    if(title && content){
        const Blogdata={
            title:this.state.title,
            content:this.state.content,
            createdAt:this.state.createdAt.valueOf(),
            editedAt:this.state.editedAt.valueOf()
        }
        this.props.onSubmit(Blogdata)
        this.setState(()=>{
            return { 
                error:""
            }
        })
        history.push("/dashboard")
    }else{
        this.setState(()=>{
            return { 
                error:"Title and Content should not be empty"
            }
        })
    }
    
}

render(){
    return(
        <div>
            {this.state.error && <p className="blogerror">{this.state.error}</p>}
            <form className="blogform" onSubmit={this.onSubmit}>
                <input className="blogtitle" type="text" placeholder="Title of Blog" value={this.state.title} onChange={(e)=>{this.onChangeTitle(e)}}></input>
                <textarea className="textarea" placeholder="Content of the blog" value={this.state.content} onChange={(e)=>{this.onChangeContent(e)}}></textarea>
                <button className="submitblog" value="submit">{this.props.blog?<p>Update</p>:<p>Submit</p>}</button>
                
            </form>
        </div>
    )}
}

export default connect()(BlogForm);