import React from "react";
import { Outlet } from "react-router-dom";
function UserLayout() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div > </div>
      <div></div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default UserLayout;
