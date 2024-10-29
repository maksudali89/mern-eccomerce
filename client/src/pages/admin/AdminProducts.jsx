import React, { Fragment } from "react";
import { MdLogout } from "react-icons/md";

function AdminProducts() {
  return (
    <Fragment>
      <div className=" flex-1  justify-end items-end ml-30  ">
        <button className="bg-orange-500 items-end  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
          Add New Products
        </button>
      </div>
      <div className="createDocsModeCon fixed top-0 bottom-0 left-0  right-0 bg-[rgb(0,0,0,.3)] w-screen h-screen flex flex-col items-center justify-center ">
        <div className="createDocModel p-[15px] bg-[#fff] rounded-lg w-[35vw] h-[20vw]">
          <h3 className="text-[30px] flex items-center justify-center ">
          Add New Products
          </h3>
          <div className="inputCo mt-5">
            <p className="text-[20px] text-[#808080]">Enter Product Name </p>
            <div className="inputBox w-[100%] mt-5">
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Enter Product Name"
                required
                className="w- bg-transparent rounded-md border border-primary py-[10px] px-5 text-dark-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
              />
            </div>
          </div>
          <div className="flex items-center gap-2 mt-4 justify-between w-full">
            <button className="bg-orange-300 py-2 px-3 rounded-lg mb-0 w-[49%]">
              Create New title
            </button>
            <button className="p-[10px] py-2 px-3 rounded-lg bg-red-400 w-[49%]">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default AdminProducts;
