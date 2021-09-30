import { useState, useEffect } from "react";


function BlogReadingApp(){
    const [blogs, setBlogs] = useState([]);
   
   
        useEffect(() => {
            setBlogs([
              {
                id: 1, 
                Title: 'First Blog',
                text: 'this is the first blog post',
                
              },
              {
                id: 2, 
                Title: 'Second Blog',
                text: 'this is the second blog post',
              },
              {
                id: 3, 
                Title: 'Third Blog',
                text: 'this is the third blog post',
                
              },
            ])
          }, []);

          function ShowBlog(){
           
          }


    const blogList = blogs.map(blog => 
        
        <li key={blog.id} style={{}}>
            
            <button className="nav nav-tabs nav-stacked" type="button" id={blog.id} onClick={ShowBlog}>{blog.Title}</button>
           
            </li>)
    
    return(
        <>
            <div>
            
            </div>
            <div> 
                <ul>{blogList}</ul>


            </div>
        </>
    )
}

export default BlogReadingApp;