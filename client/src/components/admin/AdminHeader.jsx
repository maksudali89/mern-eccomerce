import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import { MdLogout } from "react-icons/md";
function AdminHeader({ setOpen }) {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-background ">
      <button
        
        className="lg:hidden sm:block bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded"
      >
        <CiMenuBurger />
        <span className="sr-only">Menu</span>
      </button>
      <div className="flex flex-1 justify-end">
        <button className="py-2 mr-3  px-7 rounded-md bg-black text-white inline-flex gap-2 items-center">
          <MdLogout />
        </button>
      </div>
    </header>
  );
}

export default AdminHeader;
