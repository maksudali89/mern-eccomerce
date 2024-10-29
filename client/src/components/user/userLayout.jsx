import React from "react";
import { Outlet } from "react-router-dom";
function UserLayout() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden lg:flex items-center justify-center bg-black w-1/2 px-12">
        <div className="max-w-md space-y-6 text-center text-primary-foreground"> 
            <h1 className="text-4xl text-extrabold tracking-tight text-white">Well Come To Our Eccomerce</h1>
        </div>
      </div>
      <div className="flex items-center justify-start ml-40">
        <Outlet />
      </div>
    </div>
  );
}

export default UserLayout;
