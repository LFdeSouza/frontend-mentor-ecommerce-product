import React, { useEffect } from "react";
import { IconClose } from "../Icons";

interface Props {
  isOpen: boolean;
  toggle: () => void;
}

const NavbarMobile: React.FC<Props> = ({ isOpen, toggle }) => {
  useEffect(() => {
    const sidebar = document.querySelector(".sidebar");
    const sidebarNav = document.querySelector(".sidebarNav");
    if (sidebar && sidebarNav) {
      setTimeout(() => {
        sidebar.classList.remove("opacity-0");
        sidebarNav.classList.remove("-translate-x-full");
      }, 1);
    }
  }, [isOpen]);

  return (
    isOpen && (
      <div
        id="navMobile"
        onClick={toggle}
        className="sidebar fixed inset-0 z-50 bg-overlayBlack opacity-0 transition-opacity"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="sidebarNav fixed bottom-0 left-0 top-0 w-3/5 -translate-x-full bg-white transition-transform"
        >
          <button className="p-5" onClick={toggle}>
            <IconClose />
          </button>
          <nav className=" p-6 text-xl font-bold text-veryDarkGrayishBlue">
            <ul className="flex flex-col gap-3">
              <li className="cursor-pointer hover:text-mainOrange">
                <a>Collections</a>
              </li>
              <li className="cursor-pointer hover:text-mainOrange">
                <a>Men</a>
              </li>
              <li className="cursor-pointer hover:text-mainOrange">
                <a>Women</a>
              </li>
              <li className="cursor-pointer hover:text-mainOrange">
                <a>About</a>
              </li>
              <li className="cursor-pointer hover:text-mainOrange">
                <a>Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    )
  );
};

export default NavbarMobile;
