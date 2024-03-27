import toast from 'react-hot-toast';
import { getBooks } from '.';
// get from local storeage 
export const getWishList=()=>{
    let Wishlist=[];
    let storedwishlist=localStorage.getItem('Wishlist');
    if(storedwishlist){
        Wishlist=JSON.parse(storedwishlist);
    }
    return Wishlist;
}
// save to loacal storeage 

export const savewishlist=(wish)=>{
    const forBook=getBooks()
    const wishBook=getWishList();
    const exist=wishBook.find((b) =>b.bookId === wish.bookId);
    const isRead=forBook.find((b) =>b.bookId === wish.bookId);
    if(exist){
        toast.error('allready exist')
    }
    else if(isRead){
        toast.error('Allready read')
    }
    else{
        wishBook.push(wish)
    localStorage.setItem('Wishlist',JSON.stringify(wishBook))
    toast.success('Added succesfully')
   
    }
}