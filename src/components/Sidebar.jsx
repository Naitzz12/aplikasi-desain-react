import { Link } from "react-router-dom";
import User1 from "../assets/user1.png";
import Bar from "./bar";

// Icons
import IconNameTag from "./icons/IconNameTag";

const Sidebar = ({ isOpen, toggleButton }) => {
  return (
    <>
      <nav>
        <ul
          className={`absolute transform left-0 transition transition-transform duration-700 top-0 w-full bg-white h-screen flex justify-start items-start flex-col gap-6 z-10 pt-36 pl-4 ${
            isOpen ? " translate-x-0" : " -translate-x-full"
          }`}
        >
          <button onClick={toggleButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
              className="absolute top-0 left-0 m-4 text-cyan-500"
            >
              <path
                fill="currentColor"
                d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"
              />
            </svg>
          </button>
          <div className=" absolute bg-gray-800 flex justify-between items-center w-5/6 left-10 top-16 mx-3 py-6 px-3 rounded-xl">
            <div className="flex justify-center items-center flex-row gap-4">
              <img
                src={User1}
                alt=""
                className=" w-16 absolute -left-8 border border-8 border-gray-800 rounded-full"
              />
              <div className=" flex justify-center items-start flex-col pl-7">
                <div className=" flex flex-row-reverse justify-center items-center gap-1">
                  <h2 className=" text-white">Naitzz</h2>
                  <IconNameTag />
                </div>
                <p className=" text-gray-400 text-sm">ID : 0123456</p>
              </div>
            </div>
            <Bar />
          </div>
          <li>
            <Link to={"/about"} className=" text-black">
              About
            </Link>
          </li>
          <li>
            <Link to={"/contact"} className=" text-black">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
