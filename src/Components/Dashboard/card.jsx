import React  , {useEffect, useState}from 'react'
import { Link } from 'react-router-dom'
import land from './img/land-profile.png'
import './landRequested/style.css'

const Card = () => {

  const [id,setId]=useState("")
  const [parcelId, setParcelID] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");


  useEffect(() => {
     setId(JSON.parse(localStorage.getItem("id")) || "1234" )
    setParcelID(JSON.parse(localStorage.getItem("parcelId")) || "8616")
    setPrice("1000000")
    setStatus("Pending")
  }, [])
  
  return (
    <>
    <div className="card-main">
  <div className="card-image">
      <img src={land} alt="land profile" />
      <Link to='/map'><button>See on Map</button></Link>
  </div>
  
  <div className="card-desc">
      <h1>Land Detail</h1>
    <p> <b>ID:</b> {id} </p>
   <p> <b>Parcel ID:</b> {parcelId} </p>
   <p> <b>Price:</b> {price} </p>
   <p> <b>Status:</b> {status} </p>
<Link to='/detail'> <button>View Detail</button> </Link>
  </div>

    </div>
    
    </>
  )
}

export default Card