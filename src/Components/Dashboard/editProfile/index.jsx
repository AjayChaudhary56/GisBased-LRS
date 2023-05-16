import { useForm } from "react-hook-form";
import React, { useState ,useEffect} from "react";
import "./style.css";

const EditProfile = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [citizenship, setCitizenship] = useState("");
  const [email, setEmail] = useState("");



  // Example code for storing multiple files in localStorage



  const handleFileInputChange1 = (event) => {
    const file1 = event.target.files[0];
   
  
    const reader = new FileReader();
    reader.readAsDataURL(file1);
   
    reader.onload = () => {
      const base64String = reader.result;
      localStorage.setItem('file1', base64String);
  
  };

  }
  const handleFileInputChange3 = (event) => {
    const file3 = event.target.files[0];
   
  
    const reader = new FileReader();
    reader.readAsDataURL(file3);
   
    reader.onload = () => {
      const base64String = reader.result;
      localStorage.setItem('file3', base64String);
  
  };

  }
  const handleFileInputChange2 = (event) => {
    const file2 = event.target.files[0];
   
  
    const reader = new FileReader();
    reader.readAsDataURL(file2);
   
    reader.onload = () => {
      const base64String = reader.result;
      localStorage.setItem('file2', base64String);
  
  };

  }


  useEffect(() => {
    localStorage.setItem("firstname", JSON.stringify(firstname));
    const frnm = JSON.parse(localStorage.getItem("firstname"));
    setFirstname(frnm);

    localStorage.setItem("lastname", JSON.stringify(lastname));
    const lname = JSON.parse(localStorage.getItem("lastname"));
    setLastname(lname);

    localStorage.setItem("address", JSON.stringify(address));
    const add = JSON.parse(localStorage.getItem("address"));
    setAddress(add);

    localStorage.setItem("email", JSON.stringify(email));
    const emale = JSON.parse(localStorage.getItem("email"));
    setEmail(emale);

    localStorage.setItem("citizenship", JSON.stringify(citizenship));
    const citizen = JSON.parse(localStorage.getItem("citizenship"));
    setCitizenship(citizen);

    localStorage.setItem("phonenumber", JSON.stringify(phonenumber));
    const phno = JSON.parse(localStorage.getItem("phonenumber"));
    setPhonenumber(phno);
  }, [
    firstname,
    lastname,
    address,
    email,
    citizenship,
    phonenumber,
    //  file1,file2 ,file3
  ]);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      firstName: "Siddhant",
      lastName: "Shrestha",
      address: "Pokhara",
      email: "sid@test.com",
      citizenship: "12343455",
      phonenumber: "9812312312",
    },
  });

  const onSubmit = (data) => {
    console.log("Submitted data ", data);
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
                value={firstname}
                {...register("firstname", { required: true, maxLength: 20 })}
                onChange={(e) => setFirstname(e.target.value)}
                aria-invalid={errors.firstname ? "true" : "false"}
                placeholder="  First Name"
              />
            </div>
            <div className="lastname">
              <input
                type="text"
                id="lastname"
                value={lastname}
                {...register("lastname", {
                  required: true,
                })}
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
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
            value={address}
            {...register("address", { required: true })}
            onChange={(e) => setAddress(e.target.value)}
            aria-invalid={errors.address ? "true" : "false"}
            placeholder="  Address"
          />
          {errors.address?.type === "required" && (
            <p role="alert">Address is required</p>
          )}

          <input
            type="number"
            id="phonenumber"
            value={phonenumber}
            {...register("phonenumber", { required: true, maxLength: 10 })}
            onChange={(e) => setPhonenumber(e.target.value)}
            aria-invalid={errors.phonenumber ? "true" : "false"}
            placeholder="  Phone Number"
          />
          {errors.phonenumber?.type === "required" && (
            <p role="alert">Phone Number is required</p>
          )}

          <input
            type="email"
            id="email"
            value={email}
            {...register("email", { required: true })}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={errors.email ? "true" : "false"}
            placeholder="  Email Address "
          />
          {errors.email?.type === "required" && (
            <p role="alert">Email Address is required</p>
          )}

          <input
            type="text"
            id="citizenship"
            value={citizenship}
            {...register("citizenship", { required: true })}
            onChange={(e) => setCitizenship(e.target.value)}
            aria-invalid={errors.citizenship ? "true" : "false"}
            placeholder="  Citizenship Number "
          />
          {errors.citizenship?.type === "required" && (
            <p role="alert">citizenship Number is required</p>
          )}
        </div>
        <div className="file-input">
          <label>All file must be in JPG, JPEG ,PNG </label>
          <label>Profile Pic </label>
          <input
            type="file"
            onChange={handleFileInputChange1}
            name="file1"
            />
            <label>Citizenship Front </label>
          <input
            type="file"
            onChange={handleFileInputChange2}
  name="file2"
          />
          <label>Citizenship Back </label>
          <input
            type="file"
            onChange={handleFileInputChange3}
            name="file3"
          />
        </div>

        <button id="btn" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default EditProfile;
