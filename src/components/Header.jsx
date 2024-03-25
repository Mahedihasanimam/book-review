import { NavLink } from 'react-router-dom';
import book from '../assets/pngwing_1-removebg-preview.png'

const Header = () => {
  return (
    <div className="hero py-20 bg-base-200 rounded-lg ">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <img
          src={book}
          className=" rounded-lg "
        />
        <div className="lg:w-1/2 lg:px-24">
          <h1 className="text-5xl  font-bold mb-12 leading-18 ">Books to freshen up your bookshelf</h1>
          <NavLink to={'/booklist'}><button className="btn bg-green-400 hover:bg-green-400 text-white text-lg">View The List</button></NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
