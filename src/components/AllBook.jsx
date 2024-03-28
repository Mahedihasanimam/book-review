import { useEffect, useState } from "react";
import Book from "./Book";

const AllBook = () => {
    const [book, setBook] = useState([]);
    useEffect(() => {
        fetch("book.json")
          .then((res) => res.json())
          .then((data) => setBook(data));
      }, []);
    return (
       <div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
      {
        book.map(item=><Book key={item.bookId} item={item} ></Book>)
      }
      </div>
       </div>
    );
};

export default AllBook;