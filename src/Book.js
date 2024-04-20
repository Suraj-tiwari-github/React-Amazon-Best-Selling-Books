const Book = ({ img, title, author,number}) => {
  // console.log(props);
  // const {img, title, author}=props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      
      {/* process by setup wrapper, next would be anonymous function */}
      {/* <button onClick={getSingleBook}> get book</button> */}

      {/* anonoymous function and then calling */}
      

      <h2>{author}</h2>
      <span className='number'>{`${number+1}`}</span>
    </article>
  );
};

export default Book;