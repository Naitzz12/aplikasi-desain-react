import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import User1 from "../assets/user1.png";

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
      <nav className=" fixed top-0 w-full flex justify-between items-center px-7 py-9 h-9 z-20 bg-white">
        <Icon1 toggleButton={ToggleShow} />
        <Sidebar isOpen={isOpen} toggleButton={ToggleShow} />
        <div className="logoBar flex justify-center items-center flex-row gap-3">
          <img src={User1} alt="" className=" w-14" />
          <Icon3 />
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
