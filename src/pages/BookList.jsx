import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { getBooks } from '../components'; // Assuming this imports the function to get books
import ReadBookCard from '../components/ReadBookCard';
import { getWishList } from '../components/Wishlist'; // Assuming this imports the function to get wishlist
import WishListCard from '../components/WishListCard';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [wish, setWish] = useState([]);
  const [select,setSelect]=useState(0)


  useEffect(() => {
    // Fetch books data
    const fetchBooks = async () => {
      try {
        const booksData = await getBooks(); // Assuming getBooks returns a promise
        setBooks(booksData);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks(); // Call the function to fetch books
  }, []);

  useEffect(() => {
    // Fetch wishlist data
    const fetchWishList = async () => {
      try {
        const wishListData = await getWishList(); // Assuming getWishList returns a promise
        setWish(wishListData);
      } catch (error) {
        console.error('Error fetching wishlist:', error);
      }
    };

    fetchWishList(); // Call the function to fetch wishlist
  }, []);


  const handleOnchane=(event)=>{
    const selectValue=parseInt(event.target.value)
    if(selectValue == 1){
      const book1=[...books].sort((a,b)=>b.rating-a.rating)
      setBooks(book1)
      
    }
    else if(selectValue == 2){
      const book2=[...books].sort((a,b)=>b.totalPages-a.totalPages)
      setBooks(book2)
      
    }
    else if(selectValue == 3){
      const book3=[...books].sort((a,b)=>b.yearOfPublishing-a.yearOfPublishing)
      setBooks(book3)
      
    }
    console.log( selectValue)
  }
  
  return (
    <div>
      <div className="bg-[#1313130D] rounded-lg">
        <h1 className="text-5xl mb-8 mt-4 font-bold text-center p-6">Books</h1>
      </div>
      <select
      onChange={handleOnchane}
       className="select bg-green-500 text-white max-w-xs flex justify-center mx-auto mb-8">
        <option disabled selected defaultValue>
          Sort By
        </option>
        <option value={'1'}>Rating</option>
        <option value={'2'}>Number of Pages</option>
        <option value={'3'}>Publisher</option> {/* Corrected typo */}
      </select>

      {/* tabs */}
      <div>
        <Tabs>
          <TabList>
            <Tab>Books Read</Tab> {/* Corrected typo */}
            <Tab>Wish List</Tab>
          </TabList>

          <TabPanel>
            <div className="mt-4">
              {books.map((item) => (
                <ReadBookCard key={item.bookId} item={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-4">
              {wish.map((item) => (
                <WishListCard key={item.bookId} item={item} />
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default BookList;
