import firebase from "../../firebase/firebas";

export const addBlog=({blogid,title,content,createdAt,editedAt})=>{
    return{
        type:"ADDBLOG",
        blog:{
            blogid,
            title,
            content,
            createdAt,
            editedAt
        }

    }
}

export const startAddBlog =(blogdataorgi) =>{
    return(dispatch,getState)=>{
        const id=getState().auth.authid;
        return firebase.database().ref(`users/${id}/blogs`).push(blogdataorgi).then((ref)=>{
            const blogdata={
                blogid:ref.key,
                ...blogdataorgi
            }
            dispatch(addBlog(blogdata))
        })
    }
}

export const editBlog=({blogid,title,content,createdAt,editedAt})=>{
    return{
        type:"EDITBLOG",
        blog:{
            blogid,
            title,
            content,
            createdAt,
            editedAt
        }

    }
}


export const startEditBlog =(blogid,updates) =>{
    return(dispatch,getState)=>{
        const id=getState().auth.authid;
        return firebase.database().ref(`users/${id}/blogs/${blogid}`).update(updates).then((ref)=>{
            const blogdata={
                blogid,
                ...updates
            }
            dispatch(editBlog(blogdata))
        })
    }
}

export const setBlog=(blogs)=>{
    return {
        type:"SETBLOG",
        blogs
    }
}

export const startSetBlog =() =>{
    return(dispatch,getState)=>{
        const id=getState().auth.authid;
        console.log(id)
        let blogs=[];
        return firebase.database().ref(`users/${id}/blogs`).once("value").then((snapshot)=>{
            snapshot.forEach((blog) => {
                let bl={
                    blogid:blog.key,
                    ...blog.val()
                }
                blogs.push(bl);
            });
            dispatch(setBlog(blogs))
        })
    }
}

export const removeBlog=(blogid)=>{
    return {
        type:"REMOVEBLOG",
        blogid
    }
}

export const startRemoveBlog =(blogid) =>{
    return(dispatch,getState)=>{
        const id=getState().auth.authid;
        console.log(id)
        return firebase.database().ref(`users/${id}/blogs/${blogid}`).remove().then(()=>{

            dispatch(removeBlog(blogid))
        })
    }
}