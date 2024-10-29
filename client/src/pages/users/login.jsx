import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { checkAuth, LoginUser } from "../../redux/auth-slice/auth.js";
// import { Alert } from "@material-tailwind/react";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const UserLoginSubmit = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password })).then((data) => {
      console.log(data.payload);
      // if(data.payload.success === true){
      //     setAlert(data.payload.message);
      // }
      // dispatch(checkAuth());
    });
  };

  return (
    <div className="flex items-center justify-center mx-11 w-full">
      {/* <Alert>{Alert}</Alert> */}
      <div className="form-container w-90 max-w-6xl ">
        <form
          className=" form bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 "
          onSubmit={UserLoginSubmit}
        >
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p>
            Already don't Have A Account ?{" "}
            <Link
              to="/user/signup"
              className="text-bold text-blue-600 hover:underline"
            >
              Register
            </Link>{" "}
          </p>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              LogIn
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          ©2020 Acme Corp. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Login;
