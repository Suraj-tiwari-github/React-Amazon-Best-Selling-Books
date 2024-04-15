import React from "react";
import ReactDOM from "react-dom/client";

import './index.css'

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}


const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="./Images/Ramayan_BookCover1.jpg"
    alt="Ramayan by Valmiki Ji"
  />
);
const Title = () => <h2>Ramayana Book by Valmiki</h2>;
const Author = () => {
  return <h2>Author: Shree Valmiki</h2>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
