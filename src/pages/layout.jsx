import { useState } from "react";
import { Link, Outlet} from "react-router-dom";
import Bar from "../components/bar";
import Sidebar from "../components/Sidebar";
import User1 from "../assets/user1.png"

const Layout = () => {

  const [isOpen, SetIsOpen] = useState(false);

  const ToggleShow = () => {
    SetIsOpen(!isOpen);
  }

  return (
    <>
      <nav className=" flex justify-between items-center px-7 py-9 h-9">
        <Link to={"/"} className=" text-cyan-500 text-2xl" id="logo">My App</Link>
        <Sidebar isOpen={isOpen} />
        <div className="logoBar flex justify-center items-center flex-row-reverse gap-3">
          <img src={User1} alt="" className=" w-14 border border-cyan-500 rounded-full border-4"/>
          <Bar toggleButton={ToggleShow}/>
        </div>
      </nav>
      <Outlet/>
    </>
  );
};

export default Layout;
