import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
const author = "Shree Valmiki";
const title = "Ramayana Book by Valmiki";
const img = "./Images/Ramayan_BookCover1.jpg";

const firstBook={
   author :"Shree Valmiki",
   title : "Ramayana Book by Valmiki",
   img :"./Images/Ramayan_BookCover1.jpg",
}

const secondBook = {
  author: "Ved vyas",
  title: "Mahabharat",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1akxg7HB1ykbtj_hjZmim-NDed-dC1j4exVxTrd2FVXTLyWqn",
};

function BookList() {
  return (
    <section className="booklist">
      <Book author={firstBook.author} title={firstBook.title} img={firstBook.img}/>
      <Book author={secondBook.author} title={secondBook.title} img={secondBook.img}/>
      
    </section>
  );
}

const Book = (props) => {
  console.log(props)
  return (
    <article className="book">
      {/* <Image /> */}
      {/* <Title /> */}
      {/* <Author /> */}
      {/* <h2 style={inlinestyle}>Author: Shree Valmiki</h2>; */}
      {/* <img src="./Images/Ramayan_BookCover1.jpg" alt="Ramayan by Valmiki Ji" />
      <h2>Ramayana Book by Valmiki</h2>
      <h2>Shree Valmiki</h2> */}

      <img src={props.img} alt="Ramayan by Valmiki Ji" />
      <h2>{props.title}</h2>
      <h2>{props.author}</h2>
      {/* // we cannot use statement like let x=6 in the js under component. for example */}
      {/* {<p> {let x=6 }</p>} */}
      {/* the above line will through an error because it is a statement, there have to return something */}
      {/* <p>{6+6}</p> */}

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
