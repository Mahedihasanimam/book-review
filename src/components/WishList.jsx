import { useEffect, useState } from "react";
import WishListCard from "./WishListCard";
import { getWishList } from "./Wishlist";



const WishList = () => {
    const [wish, setwish] = useState([]);
  useEffect(() => {
    const books = getWishList();
    setwish(books);
  }, []);

  return (
    <div className="mt-4">
     {
        wish.map(item=><WishListCard key={item.bookId} item={item}></WishListCard>)
     }
    </div>
  );

};


export default WishList;