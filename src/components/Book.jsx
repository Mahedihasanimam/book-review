import img from '../assets/pngwing_1-removebg-preview.png'
const Book = ({item}) => {
    const {bookName,bookId,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing}=item;

  return (
    <div className="card  bg-base-100 border-2 border-gray-100 shadow-xl ">
      <figure>
        <img className='bg-gray-200 rounded-lg p-5 mt-5'
          src={img}
          alt="Book"
        />
      </figure>
      <div className="card-body space-y-3">
       <div>
       <button className='py-1 bg-opacity-50 bg-green-100 hover:bg-green-100 text-green-400 rounded-full font-bold px-8 '>Young Adult</button>
       <button className='py-1 bg-opacity-50 bg-green-100 hover:bg-green-100 text-green-400 rounded-full font-bold px-8  ml-4'>Identity</button>
       </div>
        <h2 className="text-2xl font-bold">{bookName}</h2>
        <p>By : {publisher}</p>
        <hr />
        <div className=" flex justify-between card-actions ">
          <span>{category}</span>
          <span>{rating} </span>
        </div>
      </div>
    </div>
  );
};

export default Book;
