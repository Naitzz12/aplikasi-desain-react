import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import User1 from "../assets/user1.png";
import BottomL from "../components/BottomList";

// Icons
import Icon1 from "../components/icons/IconLogoGrid";
import Icon3 from "../components/icons/IconNotification";
// Icons

const Layout = () => {
  const [isOpen, SetIsOpen] = useState(false);

  const ToggleShow = () => {
    SetIsOpen(!isOpen);
  };

  return (
    <>
      <nav className=" fixed top-0 left-0 right-0 flex justify-between items-center px-7 py-10 h-9 z-20 bg-slate-300 rounded-br-3xl rounded-bl-3xl shadow-md">
        <Icon1 toggleButton={ToggleShow} />
        <Sidebar isOpen={isOpen} toggleButton={ToggleShow} />
        <div className="logoBar flex justify-center items-center flex-row gap-3">
          <img src={User1} alt="" className=" w-14" />
          <Icon3 />
        </div>
      </nav>
      <Outlet />
      <BottomL />
    </>
  );
};

export default Layout;
