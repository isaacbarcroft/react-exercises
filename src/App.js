
import { useState } from 'react';
import './App.css';
import BlogPostForm from './components/BogPostForm/BlogPostForm';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
const [selection, setSelection] = useState('blogfrom')

let html;

if(selection === 'blogForm') {
  html = <BlogPostForm />
} else {
  html = <ContactForm />
}
  return (
    <div className="App">
      <header>
        <button type="button" onClick={() => setSelection('blogfrom')}>Blog Form</button>
        <button type="button" onClick={() => setSelection('contactForm')}>Contact Form</button>
      </header>

    {html}

    </div>
  );
}

export default App;
