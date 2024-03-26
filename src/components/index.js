import toast, { Toaster } from 'react-hot-toast';
// get from local storeage 
export const getBooks=()=>{
    let books=[];
    let storedBooks=localStorage.getItem('books');
    if(storedBooks){
        books=JSON.parse(storedBooks);
    }
    return books;
}
// save to loacal storeage 

export const saveBook=(book)=>{
    const books=getBooks();
    const exist=books.find(b=>b.id=== book.id);
    if(exist){
       return toast.error('allready exist');
    }
    books.push(book)
    localStorage.setItem('books',JSON.stringify(books))
    toast.success('Added succesfully')
}