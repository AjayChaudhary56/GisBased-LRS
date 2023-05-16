import {  Link } from '@mui/material'
import React from 'react'
import land from './img/land-profile.png'
import ProfileCard from './profileCard'
import './style.css'

const Detail = () => {
  return (
    <div className='detailpage1'>
    <h1>Detail Page</h1>
    <h2>Land Information</h2>
    <div className="detail1">
    <div className="detail-image">
        <img src={land} alt="land" />
        <Link> <button> See on Map</button></Link>
    </div>
    <div className="detail-desc">
   <p> <b>ID:</b> 6571674 </p>
   <p> <b>Parcel ID:</b> 1674 </p>
   <p> <b>Price:</b> 100000 </p>
   <p> <b>Status:</b> Selling </p>
   <p> <b>Ward No:</b> 4 </p>
   <p> <b>Province:</b> Lumbini </p>
   <p> <b>Area:</b> 431 </p>
   <p> <b>City:</b> Bardaghat </p>
   <p> <b>Address (Survey No.):</b> 57174 </p>
    </div>
    </div>
    <h2>Current Land owner</h2>
    <div className="detail2">
    <ProfileCard name={ ' Ajay Chaudhary'} gmail={ ' iamazoy110125@gmail.com'} phno={' 9800754545'} address={'Bardaghat-4'}/>
    </div>
    <h2>Requested to Buy land User Information</h2>
    <div className="detail3">
        <ProfileCard name={ 'Ajay Chaudhary'} gmail={ ' iamazoy110125@gmail.com'} phno={' 9800754545'} address={'Bardaghat-4'}/>
        <ProfileCard name={ ' Sid Shretha'} gmail={ ' sidstha58@gmail.com'} phno={' 9800544854'} address={'Bhairahawa-4'}/>
        <ProfileCard name={ ' Nabin Shrestha'} gmail={ ' nabinstha246@gmail.com'} phno={' 9821979308'} address={'Bhairahawa-4'}/>
        
    </div>

    
    
    </div>
  )
}

export default Detail