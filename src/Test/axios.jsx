import React, { useState, useEffect } from "react";
import axios from "axios";

const Axios = () => {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => 
      setMyData(res.data));
  }, []);
  return (
    <div>
      <h1>Axios Test Api integration</h1>
      <>
      {
        // console.log(myData)
        myData.map((info,index)=>{
            return <div key={info.id}>{info.id}-{info.name}--{info.email}-{info.username}</div>
        })
      }
      {/* {
        myData.map((user,index)=>{
            return <li key={index}>{user}</li>
        })
      } */}
      </>
      {/* {
    myData.map((user)=>{
    const {id, name , username,email,address,geo
        street,suite,city,zipcode,geo,phone,website,company
    } = user;
        return <div className="user" key={id}>
            <h2>{name}</h2>
            <h3>{username}</h3>
            <h3>{email}</h3>
            <h3>{address}</h3>
            <h3>{geo}</h3>
            <h3>{geo.lng}</h3>

        </div>
  })} */}
    </div>
  );
};

export default Axios;
