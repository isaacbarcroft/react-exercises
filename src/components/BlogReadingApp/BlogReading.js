import { useState, useEffect } from "react";


function BlogReadingApp(){
    const [blogs, setBlogs] = useState([]);
    const [selection, setSelection] = useState();
   
   
    useEffect(() => {
        setBlogs([
            {
            id: 1, 
            title: 'First Blog',
            text: 'this is the first blog post',
            
            },
            {
            id: 2, 
            title: 'Second Blog',
            text: 'this is the second blog post',
            },
            {
            id: 3, 
            title: 'Third Blog',
            text: 'this is the third blog post',
            
            },
        ])
    }, []);
    const blogHTML = <div><h2>{selection?.title}</h2><p>{selection?.text}</p></div>
    //    console.log(selection)
    //    console.log(selection.title)
    const blogList = blogs.map(blog => 
        <li key={blog.id}>
            <button className="nav nav-tabs nav-stacked" type="button" id={blog.id} onClick={() => setSelection(blog)}>{blog.title}</button>
        </li>
        );
    
    return(
        <>
            <div>
                {blogHTML}
            </div>
            <div> 
                <ul>{blogList}</ul>
            </div>
        </>
    )
}

export default BlogReadingApp;