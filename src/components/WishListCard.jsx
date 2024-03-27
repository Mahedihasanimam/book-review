
import { Link } from "react-router-dom";
import { LuUsers} from "react-icons/lu";
import { IoDocumentTextOutline } from "react-icons/io5";
const WishListCard = ({item}) => {
    const {bookName,bookId,image,rating,category,tags,publisher,yearOfPublishing,totalPages}=item;
  return (
    <div>
      <div className="card lg:flex-row flex-col card-side bg-base-100 shadow-xl  border-2 border-gray-200 mb-4">
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
          tags.map((tag,index)=><a key={index} className="py-1 bg-opacity-50 bg-green-100 hover:bg-green-100 text-green-400 rounded-full font-bold lg:px-4 px-1 ml-4"># {tag}</a>)
        } 
        <strong className="lg:ml-12 ml-2 font-semibold">year of publushing : {yearOfPublishing}</strong>
        </div>
        <div className="lg:space-x-12 space-x-2 my-2 flex items-center ">
            <span className="flex gap-2 items-center " > <LuUsers size={20}></LuUsers> publusher : {publisher}</span>
            <p className="flex items-center gap-2"> <IoDocumentTextOutline></IoDocumentTextOutline>  Page : {totalPages}</p>
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

export default WishListCard;
