import { Route, Routes } from "react-router-dom";
import UserLayout from "./components/user/userLayout";
import AdminLayout from "./components/admin/AdminLayout";
import Login from "./pages/users/login";
import SignUp from "./pages/users/signup";
import Admin from "./pages/admin/Admin";
import "./App.css";
import CheckAuth from "./components/common/check-auth";
import ShopLayout from "./components/shop/ShopLayout";
import ShopHome from "./pages/shop/home";
import ShopListing from "./pages/shop/Listing";
import ShopCart from "./pages/shop/Cart";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "./redux/auth-slice/auth";

import AdminProducts from "./pages/admin/AdminProducts";
import AdminOrder from "./pages/admin/AdminOrder";
function App() {
  const AuthState = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        {/* User Routes */}
        <Route
          path="/user"
          element={
            <CheckAuth
              isAuthenticated={AuthState.isAuthenticated}
              user={AuthState.user}
            >
              <UserLayout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <CheckAuth
              isAuthenticated={AuthState.isAuthenticated}
              user={AuthState.user}
            >
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<Admin />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="order" element={<AdminOrder />} />
          {/* Remove Empty Route or Add Proper Route */}
        </Route>

        {/* Shop Routes */}
        <Route
          path="/shopping"
          element={
            <CheckAuth
              isAuthenticated={AuthState.isAuthenticated}
              user={AuthState.user}
            >
              <ShopLayout />
            </CheckAuth>
          }
        >
          <Route path="home" element={<ShopHome />} />
          <Route path="listing" element={<ShopListing />} />
          <Route path="cart" element={<ShopCart />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
