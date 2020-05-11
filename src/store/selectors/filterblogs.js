import moment from"moment"
export const getVisibleBlog=(blogs,{text,sortBy})=>{
    console.log(blogs);
    return blogs.filter((blog)=>{
        const textMatch=blog.title.toLowerCase().includes(text.toLowerCase());
        return  textMatch
    }).sort((a,b)=>{
        if(sortBy==="lastedit"){
            return a.editedAt>b.editedAt? -1 :1;
        }else if(sortBy==="createdAt"){
            return a.createdAt>b.createdAt?-1 :1;
        }
    })
}
