import React from "react";
import man from "./man.jpg";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./login.css";
const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="login">
        <div className="left-container">
          <img className="image" src={man} alt="login" />
        </div>

        <div className="right-container">
          <h1>Log In</h1>
          <input
            type="text"
            {...register("username", { required: true })}
            placeholder="Username"
            aria-invalid={errors.username ? "true" : "false"}
          />
          {errors.username?.type === "required" && 
            <p role="alert">Username is required</p>
          }
          <input
            type="password"
            {...register("password", { required: true })}
            placeholder="Password"
            aria-invalid={errors.password ? "true" : "false"}
          />
          {errors.password?.type === "required" && 
            <p role="alert">Password is required</p>
          }
          <button  type="submit" id="btn">Login</button>
          <Link to="/signup">Don't have an Account?</Link>
        </div>
      </form>
    </>
  );
};

export default Login;
