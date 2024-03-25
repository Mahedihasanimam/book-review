import { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {
  const [book, setBook] = useState([]);
  
  useEffect(() => {
    fetch("book.json")
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, []);

  return (
    <div>
      <h1 className="text-5xl mb-12 mt-24 font-bold text-center">Books</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-6">
      {
        book.map(item=><Book key={item.bookId} item={item} ></Book>)
      }
      </div>
    </div>
  );
};

export default Books;
