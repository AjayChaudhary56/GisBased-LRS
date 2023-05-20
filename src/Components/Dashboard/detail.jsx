import {  Link } from '@mui/material'
import React  ,{ useState, useEffect} from 'react'
import land from './img/land-profile.png'
import ProfileCard from './profileCard'
import './style.css'

const Detail = () => {
  const [id, setId] = useState("");
  const [parcelId, setParcelId] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [surveyNo, setSurveyNo] = useState("");
  const [area, setArea] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    setId(JSON.parse(localStorage.getItem("id")) || "86" )
   setParcelId(JSON.parse(localStorage.getItem("parcelId")) || "8616")
   setProvince(JSON.parse(localStorage.getItem("province")) || "Lumbini")
   setSurveyNo(JSON.parse(localStorage.getItem("surveyNo")) || "3678")
   setCity(JSON.parse(localStorage.getItem("city")) || "Bardghat")
   setArea(JSON.parse(localStorage.getItem("area")) || "234")
   setPrice("1000000")
   setStatus("Pending")
 }, [])



  return (
    <div className='detailpage1'>
    <h1>Detail Page</h1>
    <h2>Land Information</h2>
    <div className="detail1">
    <div className="detail-image">
        <img src={land} alt="land" />
        <Link to="/map"> <button> See on Map</button></Link>
    </div>
    <div className="detail-desc">
   <p> <b>ID:</b> {id} </p>
   <p> <b>Parcel ID:</b> {parcelId} </p>
   <p> <b>Price:</b> {price} </p>
   <p> <b>Status:</b> {status} </p>
   {/* <p> <b>Ward No:</b> 4 </p> */}
   <p> <b>Province:</b> {province} </p>
   <p> <b>Area:</b> {area} </p>
   <p> <b>City:</b> {city} </p>
   <p> <b>Address (Survey No.):</b> {surveyNo} </p>
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