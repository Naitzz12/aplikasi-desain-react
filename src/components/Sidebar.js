import { Link } from "react-router-dom";

const Sidebar = ({ isOpen }) => {
  return (
    <>
      <nav>
        <ul
          className={`absolute transform left-0 transition transition-transform duration-700 top-0 w-60 bg-white h-full flex justify-center items-center flex-col gap-6 ${
            isOpen ? " translate-x-0" : " -translate-x-96"
          }`}
        >
          <li>
            <Link to={"/"} className=" text-black">
              Home
            </Link>
          </li>
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
