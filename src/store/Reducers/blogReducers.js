const blogReducers =(state=[],action)=>{
    switch(action.type){
        case "ADDBLOG": return [
            ...state,
            action.blog
        ]
        case "EDITBLOG":return state.map((blog)=>{
                if(blog.blogid===action.blog.blogid){
                    return {
                        blog,
                        ...action.blog
                    }
                }else{
                    return blog;
                }
            })
    
        case "REMOVEBLOG":return state.filter((blog)=>{
            return blog.blogid!==action.blogid
        });
        case "SETBLOG":return action.blogs;
        default : return state;
    }
}
export default blogReducers;