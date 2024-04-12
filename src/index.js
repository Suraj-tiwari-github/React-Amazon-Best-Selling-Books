import React from "react";
import ReactDOM from "react-dom/client";

function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}


const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgCrsQkyqbiMXTFEWNHhtcHmVySoBVh83S8LDVV4nDPYAHfZsA"
    alt="Ramayan by Valmiki Ji"
  />
);
const Title = () => <h2>Ramayana Book by Valmiki</h2>;
const Author = () => {
  return <h2>Author: Shree Valmiki</h2>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
