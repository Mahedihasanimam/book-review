import { useLoaderData, useParams } from "react-router-dom";
import { saveBook } from ".";

const BookDetails = () => {

const handleRead=(book)=>{
    saveBook(book)
}
const handleWishList=(book)=>{
    saveBook(book)
}

  const { id } = useParams();
  const books = useLoaderData();
  const idInt = parseInt(id);
  const book = books.find((book) => book.bookId === idInt);
  const {
    bookName,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure className="bg-gray-200 rounded-lg m-5 p-10 lg:w-2/5">
        <img className="" src={image} alt="Album" />
      </figure>
      <div className="card-body lg:w-1/2">
        <h2 className="text-2xl font-bold">{bookName}</h2>
        <p>By : {publisher}</p>
        <hr />
        <span>{category}</span>
        <hr />

        <p>
          <b>review : </b> {review}
        </p>
        <div className="mb-4">
          <strong>tag</strong>
          {tags.map((tag, index) => (
            <a
              key={index}
              className="py-1 bg-opacity-50 bg-green-100 hover:bg-green-100 text-green-400 rounded-full font-bold px-4 ml-4"
            >
              # {tag}
            </a>
          ))}
        </div>
        <hr />
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Number of pages :</th>
                  <th>
                    <strong>{totalPages}</strong>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>Publisher :</td>
                  <td>
                    <strong>{publisher}</strong>
                  </td>
                </tr>
                <tr>
                  <td>Year of Publishing :</td>
                  <td>
                    <strong>{yearOfPublishing}</strong>
                  </td>
                </tr>
                <tr>
                  <td>Rating :</td>
                  <td>
                    <strong>{rating}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="card-actions mt-8">
          <a onClick={()=>handleRead(book)} className="btn bg-transparent text-black border-2 border-gray-300  hover:bg-[#59C6D2] hover:text-white">
            Read
          </a>
          <a onClick={()=>handleWishList(book)} className="btn bg-[#59C6D2] hover:bg-[#59C6D2] text-white ml-2">
            Wishlist
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
