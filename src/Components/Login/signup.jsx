import React from "react";
import { useForm } from "react-hook-form";
import man from "./man.jpg";
import { Link } from "react-router-dom";
import "./signup.css";

const Signup = () => {
 
const { register,formState: { errors }, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);


  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="signup"> 
        <div className="left-container">
          <img className="signup-image" src={man} alt="login" />
        </div>
        
        <div className="right-container">
          <h1>Sign Up</h1>
          
            <input
              type="text"
              id="firstname"
              {...register("firstname" , { required: true, maxLength: 20 })}
              aria-invalid={errors.firstname ? "true" : "false"} 
              placeholder="First Name"
            />
            
            <input
              type="text"
              id="lastname"
              {...register("lastname", { required:true, pattern: /^[A-Za-z]+$/i })}
              aria-invalid={errors.lastname ? "true" : "false"}
              placeholder="Last Name "
            />
        
          {errors.firstname?.type === 'required' && <p role="alert">First name is required</p>}
          {errors.lastname?.type === 'required' && <p role="alert">Last name is required</p>}
          <input
            type="text"
            id="address"
            {...register("address", {required:true} )}
            aria-invalid={errors.address ? "true" : "false"}
            placeholder=" Address"
          />
           {errors.address?.type === 'required' && <p role="alert">Address is required</p>}
          <input
            type="number"
            id="phonenumber"
            {...register("phonenumber" ,{required:true , maxLength:10 })}
            aria-invalid={errors.phonenumber ? "true" : "false"}
            placeholder="Phone Number"
          />
           {errors.phonenumber?.type === 'required' && <p role="alert">Phone Number is required</p>}
          <input
            type="email"
            id="email"
            {...register("email",{required: true  })}
            aria-invalid={errors.email ? "true" : "false"}
            placeholder="Email Address "
          />
           {errors.email?.type === 'required' && <p role="alert">Email Addressis required</p>}
          <input
            type="password"
            id="password"
            {...register("password" ,{required: true})}
            aria-invalid={errors.password ? "true" : "false"}
            placeholder="Password "
          />
           {errors.password?.type === 'required' && <p role="alert">Password is required</p>}
          <input
            type="password"
            id="confirmpassword"
            {...register("confirmpassword", {required: true})}
            aria-invalid={errors.confirmpassword ? "true" : "false"}
            placeholder="Confirm Password"
          />
           {errors.confirmpassword?.type === 'required' && <p role="alert">Confirm Password is required</p>}
          <button id="btn" type="submit">SignUp</button>
          <Link to="/login">Already have an Account?</Link>
        </div>
      </form>
    
    </>
    );
};

export default Signup;
