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
      {/* <Image /> */}
      <img src="./Images/Ramayan_BookCover1.jpg" alt="Ramayan by Valmiki Ji" />
      {/* <Title /> */}
      <h2>Ramayana Book by Valmiki</h2>
      {/* <Author /> */}
      {/* <h2 style={inlinestyle}>Author: Shree Valmiki</h2>; */}

      <h2>Shree Valmiki</h2>

    </article>
  );
};

// const Image = () => (
  // Changing this multiples component into a single componenet. directly shifting this img tag into the book compo.
//   <img
//     src="./Images/Ramayan_BookCover1.jpg"
//     alt="Ramayan by Valmiki Ji"
//   />
// );


// const Title = () => <h2>Ramayana Book by Valmiki</h2>;
//jsx css here we have added the inline css, 
//Sometimes it won't work while changing the same property
// by using an external stylesheet.

// const Author = () => {
  // return <h2 style={{color:'#617d98',fontSize:'.85rem', marginTop:'.5rem'}}>Author: Shree Valmiki</h2>;
// };

// Let's create a object for the css , and use in the return statement of our Author component

// shifting this inline style to index.css file
// const inlinestyle={
//   color:'#617d98',
//   fontSize:'.85rem',
//   marginTop:'0.5rem',
// }


// const Author = () => {
//   return <h2 style={inlinestyle}>Author: Shree Valmiki</h2>;
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
