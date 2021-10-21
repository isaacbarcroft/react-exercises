import { useState, useEffect } from "react";

function BlogPostForm(){
const [blogs , setBlogs] = useState([]);
const [title , setTitle] = useState('');
const [body , setBody] = useState('');
const [counter, setCounter] = useState(0);

useEffect(() => {
    localStorage.setItem('blogs', JSON.stringify(blogs));
 }, [blogs]);

function handleSubmit(event){
    event.preventDefault();
    const newBlog = {
        id: counter,
        title,
        body,
    }
    setBlogs([...blogs, newBlog]);
    setCounter(counter + 1); 
    setTitle('');
    setBody('');
}

function handleTitleChange(event){
    setTitle(event.target.value)
}

function handleBodyChange(event){
    setBody(event.target.value)
}

return (
    <>
    <form action="" onSubmit={handleSubmit}>
        <input type="text" name="title" value={title} placeholder="title" onChange={handleTitleChange} />
        <input type="text" name="body" value={body} placeholder="body" onChange={handleBodyChange} />
        <button type="submit">Submit</button>
    </form>
</>
)
}

export default BlogPostForm;