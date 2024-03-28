import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const Book = ({item}) => {
    const {bookName,bookId,image,rating,category,tags,publisher}=item;

  return (
  <Link to={`/details/${bookId}`}>
      <div className="card  bg-base-100 border-2 border-gray-100 shadow-xl ">
      <figure className='lg:w-[326px] md:w-[326px] md:h-[230px] lg:h-[230px]  rounded-lg m-5 p-10 '>
        <img className=''
          src={image}
          alt="Book"
        />
      </figure>
      <div className="card-body space-y-3">
       <div>
        {
          tags.map((tag,index)=><a key={index} className="py-1 bg-opacity-50 bg-green-100 hover:bg-green-100 text-green-400 rounded-full font-bold px-4 ml-4">{tag}</a>)
        }
        
       
       </div>
        <h2 className="text-2xl font-bold">{bookName}</h2>
        <p>By : {publisher}</p>
        <hr />
        <div className=" flex justify-between card-actions text-xl">
          <span>{category}</span>
          <span className="flex gap-1 items-center justify-center font-bold">{rating} <FaRegStar></FaRegStar></span>
        </div>
      </div>
    </div>
  </Link>
  );
};

export default Book;
