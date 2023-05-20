import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/login";
import Signup from "./Components/Login/signup";
import Navbar from "./Container/Navbar/navbar";
import  Dashboard from './Components/Dashboard/dashboard';
import Axios from "./Test/axios";
import EditProfile from "./Components/Dashboard/editProfile";
import LandRequested from "./Components/Dashboard/landRequested/landRequested";
import LandAccepted from "./Components/Dashboard/landAccepted";
import LandRejected from "./Components/Dashboard/landRejected";
import Detail from "./Components/Dashboard/detail";
import BasicMap from "./Components/Map/map";
import Card from "./Components/Dashboard/card";
import AddLand from "./Components/AddLand";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/card" element={<Card />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/addLand" element={<AddLand />}></Route>
          <Route path="/axios" element={<Axios />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
          <Route index   element={<BasicMap />}></Route>
          <Route path="/map" element={<BasicMap />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/landRequested" element={<LandRequested />}></Route>
          <Route path="/landAccepted" element={<LandAccepted />}></Route>
          <Route path="/landRejected" element={<LandRejected />}></Route>
          <Route path="/dashboardEditProfile" element={<EditProfile  />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
