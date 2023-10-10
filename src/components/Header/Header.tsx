import React, { useCallback, useState } from "react";
import { IconLogo, IconMenu } from "../Icons";
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";
import Cart from "../Cart/Cart";

const Header: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = useCallback(() => {
    if (sidebarOpen) {
      const sidebar = document.querySelector(".sidebar");
      const sidebarNav = document.querySelector(".sidebarNav");
      sidebar?.classList.add("opacity-0");
      sidebarNav?.classList.add("-translate-x-full");
      setTimeout(() => setSidebarOpen(false), 150);
      return;
    }
    setSidebarOpen(true);
  }, [sidebarOpen]);

  return (
    <header className="relative flex items-center justify-between border-b border-b-gray-200 px-4 sm:px-0">
      <div className="flex items-center gap-4  py-6 sm:gap-10 sm:py-8 sm:pb-10">
        <div className="h-3 cursor-pointer sm:hidden" onClick={toggleSidebar}>
          <IconMenu />
        </div>
        <a className="text-3xl font-bold">
          <IconLogo />
        </a>
        <div className="hidden sm:block">
          <Navbar />
        </div>
        <NavbarMobile isOpen={sidebarOpen} toggle={toggleSidebar} />
      </div>
      <div className="flex items-center justify-between gap-4 sm:gap-8">
        {/* <div className="relative"> */}
        <Cart />
        {/* </div> */}
        <div className="h-8 w-8 cursor-pointer rounded-full border-2 border-transparent hover:border-mainOrange sm:h-12 sm:w-12">
          <img src="/image-avatar.png" alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
