import React from 'react'
import { Link } from 'react-router-dom'
import land from './img/land-profile.png'
import './landRequested/style.css'
const Card = () => {
  return (
    <>
    <div className="card-main">
  <div className="card-image">
      <img src={land} alt="land profile" />
      <Link to='/map'><button>See on Map</button></Link>
  </div>
  <div className="card-desc">
      <h1>Land Detail</h1>
    <p> <b>ID:</b> 6571674 </p>
   <p> <b>Parcel ID:</b> 1674 </p>
   <p> <b>Price:</b> 100000 </p>
   <p> <b>Status:</b> Selling </p>
<Link to='/detail'> <button>View Detail</button> </Link>
  </div>

    </div>
    </>
  )
}

export default Card