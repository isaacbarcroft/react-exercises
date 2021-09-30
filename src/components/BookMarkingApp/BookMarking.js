import { useState, useEffect } from "react";

function BookMarking(){

    const [bookmarks, setBookmarks] = useState([])
    const [url, setUrl] = useState('')
    const [title, setTitle] = useState('')
    const [tag, setTag] = useState('')

    useEffect(() => {
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
     }, [bookmarks]);
    

function   handleUrlChange(event){
    setUrl(event.target.value);
}
function   handleTitleChange(event){
    setTitle(event.target.value);
}
function   handleTagChange(event){
    setTag(event.target.value);
}

function handleSubmit(event){
    event.preventDefault();
    const newBookmark = {
        url,
        title,
        tag,
    }
    setBookmarks([...bookmarks, newBookmark]);
    setUrl('');
    setTitle('');
    setTag('');
    console.log(bookmarks);
    
}
function filterTag(event){
   const newBookmark = bookmarks.filter(event)
   console.log(newBookmark);
}

    return (
<>
        <form onSubmit={handleSubmit} >
            <input type="url" name="Url" value={url} placeholder="URL" onChange={handleUrlChange} />
            <input type="text" name="Title" value={title} placeholder="Title" onChange={handleTitleChange} />
            <input type="text" name="Tag" value={tag} placeholder="Tag" onChange={handleTagChange} />
            <button type="submit">Submit</button>
        </form>
        <select name="" id="" onChange={filterTag}>
                <option value=""></option>
                <option value=""></option>
            </select>
</>
    )
}

export default BookMarking;