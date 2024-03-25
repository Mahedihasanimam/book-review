import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
             <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <a > Listed Book</a>
          </li>
          <li>
            <a >Page To Read</a>
          </li>
          </ul>
        </div>
        <a className=" font-bold lg:text-3xl text-lg">Book review</a>
      </div>
      <div className="navbar-center hidden lg:flex mb-6">
        <ul className="menu menu-horizontal px-1">
          <li>
          <NavLink className={({ isActive }) =>
                      isActive ? "font-bold border-2 border-green-500 text-green-400" : "font-normal border-2 border-white"
                    } to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) =>
                      isActive ? "font-bold border-2 border-green-500 text-green-400" : "font-normal border-2 border-white"
                    } to={'/booklist'} > Listed Book</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) =>
                      isActive ? "font-bold border-2 border-green-500 text-green-400" : "font-normal border-2 border-white"
                    } to={'/read'} >Page To Read</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-green-400 text-white ">Sign In</a>
        <a className="btn bg-[#59C6D2] text-white ml-2">Sign Up</a>
      </div>
    </div>
  );
};

export default Navigation;
