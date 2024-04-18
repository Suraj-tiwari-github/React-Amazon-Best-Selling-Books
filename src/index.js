import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import Book from "./Book";
import { books } from "./books";

const author = "Shree Valmiki";
const title = "Ramayana Book by Valmiki";
const img = "./Images/Ramayan_BookCover1.jpg";





const BookList = (props) => {
  console.log(props);
  // const someValue='shakeandbake'
  
  return (
    <section className="booklist">
      <EventExample/>
      {books.map((book) => {
        console.log(book);
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

//Events in React.js
const EventExample = () => {
  const handleFormInput=(e)=>{
    console.log("handle form input")
    console.log(e);
    console.log(e.target.name);
    console.log(e.target.value);
  }
  const handleButtonClick=()=>{
    console.log('button is clicked');
  }

  // const handleForSubmission=(e)=>{
  //   e.preventDefault();
  //   console.log('form submitted');
  // }
  // return (
  //   <section>
  //     <form onSubmit={handleForSubmission}>
  //       <h2>Typical Form</h2>
  //       <input
  //         type="text"
  //         name="example"
  //         onChange={handleFormInput}
  //         style={{ margin: "1rem 0" }}
  //       />
  //       <button type="submit" onClick={handleButtonClick}>
  //         submit
  //       </button>
  //     </form>
  //     <div>
  //       <button onClick={() => console.log("button is anonymous")}>
  //         Anonymous Button
  //       </button>
  //     </div>
  //   </section>
  // );
};

// const firstBook={
//    author :"Shree Valmiki",
//    title : "Ramayana Book by Valmiki",
//    img :"./Images/Ramayan_BookCover1.jpg",
// }

// const secondBook = {
//   author: "Ved vyas",
//   title: "Mahabharat",
//   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1akxg7HB1ykbtj_hjZmim-NDed-dC1j4exVxTrd2FVXTLyWqn",
// };

// function BookList() {
//   return (
//     <section className="booklist">
//       {books.map((book)=>{
//         console.log(book)
//         // const {img,title, author, id}=book;
//         return (
//           // here we have added the key to avoid the unique key props warming in the console.
//           <Book {...book} key={book.id}/>
//         )
//       })}
//     </section>
//   );
// }

// here we are going to use function destructuring.
// const Book = (props) => {
//   const {img, title, author}=props;
//   console.log(props);
//   return (
//     <article className="book">

//       <img src={img} alt="Ramayan by Valmiki Ji" />
//       <h2>{title}</h2>
//       <h2>{author}</h2>

//     </article>
//   );
// };

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
