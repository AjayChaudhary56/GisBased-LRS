import { useForm } from "react-hook-form";
import React from "react";
import "./style.css";

const EditProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      address: "",
      email: "",
      citizenship: "",
      phonenumber: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Submitted data ", data);
    localStorage.setItem("firstname", data.firstname);
  localStorage.setItem("lastname", data.lastname);
  localStorage.setItem("address", data.address);
  localStorage.setItem("email", data.email);
  localStorage.setItem("citizenship", data.citizenship);
  localStorage.setItem("phonenumber", data.phonenumber);
  };
  const handleFileInputChange1 = (event) => {
    const file1 = event.target.files[0];
  
    const reader = new FileReader();
    reader.readAsDataURL(file1);
  
    reader.onload = () => {
      const base64String = reader.result;
      localStorage.setItem('file1', base64String);
    };
  };
  
  const handleFileInputChange2 = (event) => {
    const file2 = event.target.files[0];
  
    const reader = new FileReader();
    reader.readAsDataURL(file2);
  
    reader.onload = () => {
      const base64String = reader.result;
      localStorage.setItem('file2', base64String);
    };
  };
  
  const handleFileInputChange3 = (event) => {
    const file3 = event.target.files[0];
  
    const reader = new FileReader();
    reader.readAsDataURL(file3);
  
    reader.onload = () => {
      const base64String = reader.result;
      localStorage.setItem('file3', base64String);
    };
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="editprofile-main">
      <h1>Edit Profile</h1>
      <div className="main-container">
        <div className="nonfile-input">
          <div className="fullname">
            <div className="firstname">
              <input
                type="text"
                id="firstname"
                {...register("firstname", { maxLength: 20 })}
                aria-invalid={errors.firstname ? "true" : "false"}
                placeholder="  First Name"
              />
            </div>
            <div className="lastname">
              <input
                type="text"
                id="lastname"
                {...register("lastname")}
                aria-invalid={errors.lastname ? "true" : "false"}
                placeholder="  Last Name"
              />
            </div>
          </div>
          {errors.firstname?.type === "required" && (
            <p role="alert">First name is required</p>
          )}
          {errors.lastname?.type === "required" && (
            <p role="alert">Last name is required</p>
          )}

          <input
            type="text"
            id="address"
            {...register("address")}
            aria-invalid={errors.address ? "true" : "false"}
            placeholder="  Address"
          />
          {errors.address?.type === "required" && (
            <p role="alert">Address is required</p>
          )}

          <input
            type="number"
            id="phonenumber"
            {...register("phonenumber", { maxLength: 10 })}
            aria-invalid={errors.phonenumber ? "true" : "false"}
            placeholder="  Phone Number"
          />
          {errors.phonenumber?.type === "required" && (
            <p role="alert">Phone Number is required</p>
          )}

          <input
            type="email"
            id="email"
            {...register("email")}
            aria-invalid={errors.email ? "true" : "false"}
            placeholder="  Email Address "
          />
          {errors.email?.type === "required" && (
            <p role="alert">Email Address is required</p>
          )}

          <input
            type="text"
            id="citizenship"
            {...register("citizenship")}
            aria-invalid={errors.citizenship ? "true" : "false"}
            placeholder="  Citizenship Number "
          />
          {errors.citizenship?.type === "required" && (
            <p role="alert">Citizenship Number is required</p>
          )}
        </div>
        <div className="file-input">
          <label>All files must be in JPG, JPEG, PNG (Max file Size: 200kb)</label>
          <label>Profile Pic </label>
          <input type="file" onChange={handleFileInputChange1}  name="file1" />
          <label>Citizenship Front </label>
          <input type="file" onChange={handleFileInputChange2}  name="file2" />
          <label>Citizenship Back </label>
          <input type="file" onChange={handleFileInputChange3}  name="file3" />
        </div>

        <button id="btn" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default EditProfile;
