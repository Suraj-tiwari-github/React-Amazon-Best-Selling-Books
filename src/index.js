import React from 'react';
import ReactDOM from 'react-dom/client';

function BookList(){
  return (
    <section>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
    </section>
  )
}

const Book=()=>{
  return (
    <article>
      <Image/>
      <Title/>
      <Author/>
    </article>
  )
}

const Image=()=> <h2>Image Placeholder</h2>
const Title=()=> <h2>Book title</h2>
const Author=()=>{
  return (
    <h2>Author Name</h2>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList/>);


