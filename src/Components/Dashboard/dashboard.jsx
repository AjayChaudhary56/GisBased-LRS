import React , {useState ,useEffect} from "react";
import p1 from "./img/p1.jpg";
import p2 from "./img/p2.jpg";
import profile from "./img/profile.jpg";
import { Link } from "react-router-dom";
// import EditProfile from "./editProfile";
import "./dashboard.css";
const Dashboard = (props) => {
  const [firstname, setFirstname] = useState("Ajay");
  const [lastname, setLastname] = useState("Chaudhary");
  const [address, setAddress] = useState("Bardaghat");
  const [phonenumber, setPhonenumber] = useState("9800754545");
  const [citizenship, setCitizenship] = useState("32-75-486-96578");
  const [email, setEmail] = useState("iamazoy110125@gmail.com");
  // const [file1, setFile1] = useState("");
  // const [file2, setFile2] = useState("");
  // const [file3, setFile3] = useState("");


  // const base64String = localStorage.getItem('myImage');
  // const img = document.createElement('img');
  // img.setAttribute('src', 'data:image/png;base64,' + base64String);
  // document.body.appendChild(img);
  


  
  useEffect(() => {
    setFirstname(JSON.parse(localStorage.getItem("firstname")) || "Ajay");
    setLastname(JSON.parse(localStorage.getItem("lastname")) || "Chaudhary");
    setAddress(JSON.parse(localStorage.getItem("address")) || "Bardaghat");
    setPhonenumber(JSON.parse(localStorage.getItem("phonenumber")) || "9800754545");
    setCitizenship(JSON.parse(localStorage.getItem("citizenship")) || "32-75-486-96578");
    setEmail(JSON.parse(localStorage.getItem("email")) || "iamazoy110125@gmail.com");
    // setFile1(JSON.parse(localStorage.getItem("file1")) || "")
    // setFile2(JSON.parse(localStorage.getItem("file2")) || "")
    // setFile3(JSON.parse(localStorage.getItem("file3")) || "")
  }, []);



  

  return (
    <div className="dashboard-mainContent">
      <div className="dashboard1">
        <div className="dashboard-image">
          <img src={profile} alt="profile pic"/> > 
        
          {/* {document.body.appendChild(img1)} */}
        </div>
        <div className="dashboard-details">
            <h1>Profile Details</h1>
            <br></br>
            <br></br>
            <br></br>
          <h3>Name: {firstname+ " " +lastname }  </h3>
          <h3>Gmail Id: {email}</h3>
          <h3>Phone Number: {phonenumber}</h3>
          <h3>Address: {address}</h3>
          <h3>Citizenship Id: {citizenship}</h3>
          <button><Link to="/dashboardEditProfile">Edit Profile</Link></button>
        </div>
      </div>
      <div className="dashboard2">
        <div className="dashboard2-left">
          <label><h2>Citizenship front</h2></label><br></br>
          <img src={p1} alt="Citizenship front " />
      

        </div>
        <div className="dashboard2-right">
          {" "}
          <label><h2>Citizenship back</h2> </label><br></br>
          <img src={p2} alt="Citizenship back " />
        </div>
      </div>
      <div className="dashboard3">
          
        <button><Link to='/landRequested'>Information on Land Requested to buy </Link></button>
        <button><Link to='/landAccepted'>Information on Land Accepted to buy</Link></button>
        <button><Link to='/landRejected'>Information on Land Rejected to buy</Link></button>
      </div>
    </div>
  );
};

export default Dashboard;
