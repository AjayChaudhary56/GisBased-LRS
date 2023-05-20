import React, { useState, useEffect } from "react";
import axios from "axios";

const Axios = () => {
  const [myData, setMyData] = useState([]);
  const[isError,setIsError]=useState("")
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => setMyData(res.data))
  //     .catch((error)=> setIsError(error.message))
  // }, []);
  const getApiData = async()=>{
 try {
 
    const res= await axios.get("https://jsonplaceholder.typicode.com/posts")
    setMyData(res.data);

 }
 catch (error) {
  setIsError(error.message)
 }
} 
   
  
  useEffect(() => {
    getApiData();
  }, []);


  return (
    <div>
      <h1>Axios Test Api integration</h1>
      
  {isError !== "" && <h2>{isError}</h2>}
        {
          // console.log(myData)
          myData.map((post) => {
            const { id, title, body } = post;
            return (
              <div className="axios-post" key={id}>
                <h2>{title}</h2>
                
                <p>{body}</p>
              </div>
            );
          })
        }
    
    </div>
  );
};

export default Axios;
