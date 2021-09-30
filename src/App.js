
import { useState } from 'react';
import './App.css';
import BlogPostForm from './components/BogPost/BlogPostForm.js';
import ContactForm from './components/ContactForm/ContactForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogReadingApp from './components/BlogReadingApp/BlogReading';
import BookMarking from './components/BookMarkingApp/BookMarking';

function App() {
const [selection, setSelection] = useState('BlogPostForm')


let html;

if(selection === 'BlogPostForm') {
  html = <BlogPostForm />
} else if (selection === 'ContactForm'){
  html = <ContactForm />
}else if(selection === 'BlogReadingApp'){
  html = <BlogReadingApp />
} else if (selection === 'BookMarking'){
  html = <BookMarking />
}
  return (
    <div className="App">
      <header style={{marginBottom: "40px"}}>
        <button type="button" onClick={() => setSelection('BlogPostForm')}>Blog Form</button>
        <button type="button" onClick={() => setSelection('ContactForm')}>Contact Form</button>
        <button type="button" onClick={() => setSelection('BlogReadingApp')}>Blog Reading Form</button>
        <button type="button" onClick={() => setSelection('BookMarking')}>Book Mark Form</button>
      </header>

    {html}

    </div>
  );
}

export default App;
