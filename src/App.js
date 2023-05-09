import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/login";
import Signup from "./Components/Login/signup";
import Navbar from "./Container/Navbar/navbar";
import  Dashboard from './Components/Dashboard/dashboard';
import Axios from "./Test/axios";
import EditProfile from "./Components/Dashboard/editProfile";
import DetailPage from "./DetailPage";
function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/axios" element={<Axios />}></Route>
          <Route path="/detail" element={<DetailPage />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/dashboardEditProfile" element={<EditProfile  />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
