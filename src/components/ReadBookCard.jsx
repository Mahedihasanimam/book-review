import { Link } from "react-router-dom";

const ReadBookCard = ({item}) => {
    const {bookName,bookId,image,rating,category,tags,publisher,yearOfPublishing,totalPages}=item;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl  border-2 border-gray-200 mb-4">
        <figure className='bg-gray-200 rounded-lg m-5 p-10 '>
          <img
            src={image}
            alt="Book"
          />
        </figure>
        <div className="card-body">
        <h2 className="text-2xl font-bold">{bookName}</h2>
        <p>By : {publisher}</p>
        <div>
            <strong>Tag </strong>
        {
          tags.map((tag,index)=><a key={index} className="py-1 bg-opacity-50 bg-green-100 hover:bg-green-100 text-green-400 rounded-full font-bold px-4 ml-4"># {tag}</a>)
        }
        <strong className="ml-12 font-semibold">year of publushing : {yearOfPublishing}</strong>
        </div>
        <div className="space-x-12 my-2 ">
            <span >publusher : {publisher}</span>
            <span>Page : {totalPages}</span>
        </div>
        <hr />
          <div className="card-actions mt-4">
            <Link className="py-1 bg-opacity-50 bg-[#328EFF26] hover:bg-[#328EFF26] text-[#328EFF] rounded-full font-bold px-4 ml-4">category : {category}</Link>
            <Link className="py-1 bg-opacity-50 bg-[#FFAC3326] hover:bg-[#FFAC3326] text-[#FFAC33] rounded-full font-bold px-4 ml-4">Rating : {rating}</Link>
            <Link to={`/details/${bookId}`} className="py-1 bg-[#23BE0A] hover:bg-[#23BE0A] text-white rounded-full font-bold px-4 ml-4">View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadBookCard;
