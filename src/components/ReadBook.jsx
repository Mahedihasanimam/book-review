import { useEffect, useState } from "react";
import { getBooks } from ".";

import ReadBookCard from "./ReadBookCard";


const ReadBook = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const books = getBooks();
    setBooks(books);
  }, []);
 
  return (
    <div className="mt-4">
      {books.map((item,index) => (
        <ReadBookCard key={index}  item={item}></ReadBookCard>
      ))}
    </div>
  );
};

export default ReadBook;
