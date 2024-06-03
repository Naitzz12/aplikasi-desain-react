import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, toggleButton }) => {
  return (
    <>
      <nav>
        <ul
          className={`absolute transform left-0 transition transition-transform duration-700 top-0 w-3/5 bg-black h-screen flex justify-center items-center flex-col gap-6 z-10 ${
            isOpen ? " translate-x-0" : " -translate-x-full"
          }`}
        >
          <button onClick={toggleButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
              className="absolute top-0 left-0 m-2 text-cyan-500"
            >
              <path
                fill="currentColor"
                d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"
              />
            </svg>
          </button>
          <li>
            <Link to={"/"} className=" text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about"} className=" text-white">
              About
            </Link>
          </li>
          <li>
            <Link to={"/contact"} className=" text-white">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
