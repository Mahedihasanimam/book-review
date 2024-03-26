import { useEffect, useState } from "react";
import { getBooks } from ".";
import WishListCard from "./WishListCard";



const WishList = () => {
    const [wish, setwish] = useState([]);
  useEffect(() => {
    const books = getBooks();
    setwish(books);
  }, []);

  return (
    <div className="mt-4">
     {
        wish.map(item=><WishListCard item={item}></WishListCard>)
     }
    </div>
  );

};


export default WishList;