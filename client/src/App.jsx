import { Route, Routes } from "react-router-dom"
import UserLayout from './components/user/userLayout'
import AdminLayout from './components/admin/AdminLayout';
import Login from "./pages/users/login"
import SignUp from "./pages/users/signup"
import Admin from './pages/admin/Admin'
function App() {


  return (
    
        <div>
          <Routes>
            <Route path="/user" element={<UserLayout />}>
                <Route path="login" element={<Login />} />
                <Route path="signUp" element={<SignUp />} />
            </Route>
            <Route path="/admin" element={<AdminLayout />}>
                <Route path="panel" element={<Admin />} />
                <Route />
            </Route>
          </Routes>
        </div>
  )
}

export default App
