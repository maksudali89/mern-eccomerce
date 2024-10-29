import React, { Fragment } from "react";
import { LuLineChart, LuSheet } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import {Sheet} from 'react-modal-sheet';
import { LuLayoutDashboard } from "react-icons/lu";
import { BsCart4 } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi2";
const AdminMenuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/admin/dashboard",
    icons: <LuLayoutDashboard />,
  },
  {
    id: "products",
    label: "Products",
    path: "/admin/products",
    icons: <BsCart4 />,
  },
  {
    id: "order",
    label: "Order",
    path: "/admin/order",
    icons: <HiOutlineShoppingBag />,
  },
];
const MenuItems = () => {
  const navigate = useNavigate();
  return (
    <nav className="mt-8 flex-col flex gap-2">
      {AdminMenuItems.map((menuItem) => (
        <div
          key={menuItem.id}
          onClick={(e) => navigate(menuItem.path)}
          className="flex items-center gap-2 rounded-md px-3 py-3 cursor-pointer hover:bg-gray-100 text-xl"
        >
          {menuItem.icons}
          <span>{menuItem.label}</span>
        </div>
      ))}
    </nav>
  );
};
function AdminSideBar({open,setOpen}) {
  const navigate = useNavigate();
  return (
    <Fragment>
    <Sheet isOpen={open} onChange={setOpen}>
      <Sheet.Content className="w-64" >
          <div className="flex flex-col h-full">
            <Sheet.Header className="border-b">
              <LuLineChart size={30} />
              Admin Panel
            </Sheet.Header>
            <MenuItems />
          </div>
      </Sheet.Content>
    </Sheet>
      <aside className="hidden w-64 flex-col border-r bg-background p-6 lg:flex">
        <div
          onClick={(e) => navigate("/admin/dashboard")}
          className="flex cursor-pointer items-center gap-2"
        >
          <LuLineChart size={30} />
          <h1 className="bg-gray-50 px-7 rounded-lg text-ellipsis font-extrabold">
            Admin Panel
          </h1>
        </div>
        <MenuItems />
      </aside>
    </Fragment>
  );
}

export default AdminSideBar;
