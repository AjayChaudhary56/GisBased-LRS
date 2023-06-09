// import { useForm } from "react-hook-form";
// import React, { useState, useEffect } from "react";
// import "./style.css";

// const AddLand = () => {
//   const [id, setId] = useState("");
//   const [parcelId, setParcelId] = useState("");
//   const [province, setProvince] = useState("");
//   const [city, setCity] = useState("");
//   const [surveyNo, setSurveyNo] = useState("");
//   const [area, setArea] = useState("");

//   // Example code for storing multiple files in localStorage

//   useEffect(() => {
//     localStorage.setItem("id", JSON.stringify(id));
//     const id1 = JSON.parse(localStorage.getItem("id"));
//     setId(id1);

//     localStorage.setItem("parcelId", JSON.stringify(parcelId));
//     const parcel = JSON.parse(localStorage.getItem("parcelId"));
//     setParcelId(parcel);

//     localStorage.setItem("province", JSON.stringify(province));
//     const province1 = JSON.parse(localStorage.getItem("province"));
//     setProvince(province1);

//     localStorage.setItem("area", JSON.stringify(area));
//     const area1 = JSON.parse(localStorage.getItem("area"));
//     setArea(area1);

//     localStorage.setItem("surveyNo", JSON.stringify(surveyNo));
//     const survey = JSON.parse(localStorage.getItem("surveyNo"));
//     setSurveyNo(survey);

//     localStorage.setItem("city", JSON.stringify(city));
//     const city1 = JSON.parse(localStorage.getItem("city"));
//     setCity(city1);
//   }, [
//     id,
//     parcelId,
//     province,
//     area,
//     surveyNo,
//     city,
//     //  file1,file2 ,file3
//   ]);

//   const {
//     register,
//     formState: { errors },
//     handleSubmit,
//   } = useForm({
//     defaultValues: {
//       id: " ",
//       parcelId: " ",
//       province: " ",
//       area: " ",
//       surveyNo: " ",
//       city: " ",
//     },
//   });

//   const onSubmit = (data) => {
//     console.log("Submitted data ", data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="addland-main">
//       <h1>Add Land</h1>
//       <div className="add-land-main-container">
//         <div className="id">

//           <input
//             type="number"
//             id="id"
//             value={id}
//             {...register("id", { required: true, maxLength: 20 })}
//             onChange={(e) => setId(e.target.value)}
//             aria-invalid={errors.id ? "true" : "false"}
//             placeholder=" ID"
//           />
//         </div>
//         {errors.id?.type === "required" && <p role="alert">ID is required</p>}
//         <div className="parcelId">
//           <input
//             type="number"
//             id="parcelId"
//             value={parcelId}
//             {...register("parcelId", {
//               required: true,
//             })}
//             onChange={(e) => {
//               setParcelId(e.target.value);
//             }}
//             aria-invalid={errors.parcelId ? "true" : "false"}
//             placeholder=" Parcel Id"
//           />
//         </div>

//         {errors.parcelId?.type === "required" && (
//           <p role="alert">Parcel Id is required</p>
//         )}

//           <input
//             type="text"
//             id="province"
//             value={province}
//             {...register("province", {
//               required: true,
//             })}
//             onChange={(e) => {
//               setProvince(e.target.value);
//             }}
//             aria-invalid={errors.province ? "true" : "false"}
//             placeholder="Province"
//           />

//         {errors.province?.type === "required" && (
//           <p role="alert">Province is required</p>
//         )}

//         {/* <input
//           type="text"
//           id="province"
//           value={province}
//           {...register("province", { required: true })}
//           onChange={(e) => setProvince(e.target.value)}
//           aria-invalid={errors.province ? "true" : "false"}
//           placeholder=" Province"
//         />
//         {errors.province?.type === "required" && (
//           <p role="alert">Province is required</p>
//         )} */}

//         {/* <input
//           type="text"
//           id="city"
//           value={city}
//           {...register("city", { required: true, maxLength: 10 })}
//           onChange={(e) => setCity(e.target.value)}
//           aria-invalid={errors.city ? "true" : "false"}
//           placeholder=" City"
//         />
//         {errors.city?.type === "required" && (
//           <p role="alert"> City is required</p>
//         )} */}

//         <input
//           type="text"
//           id="city"
//           value={city}
//           {...register("city", { required: true })}
//           onChange={(e) => setCity(e.target.value)}
//           aria-invalid={errors.city ? "true" : "false"}
//           placeholder="City"
//         />
//         {errors.city?.type === "required" && (
//           <p role="alert">City is required</p>
//         )}
//         <input
//           type="number"
//           id="area"
//           value={area}
//           {...register("area", { required: true })}
//           onChange={(e) => setArea(e.target.value)}
//           aria-invalid={errors.area ? "true" : "false"}
//           placeholder=" Area"
//         />
//         {errors.area?.type === "required" && (
//           <p role="alert">Area is required</p>
//         )}

//         <input
//           type="number"
//           id="surveyNo"
//           value={surveyNo}
//           {...register("surveyNo", { required: true })}
//           onChange={(e) => setSurveyNo(e.target.value)}
//           aria-invalid={errors.surveyNo ? "true" : "false"}
//           placeholder="  Survey No"
//         />
//         {errors.surveyNo?.type === "required" && (
//           <p role="alert">Survey No is required</p>
//         )}

//         <button id="btn" type="submit">
//           Add Land
//         </button>
//       </div>
//     </form>
//   );
// };

// export default AddLand;
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
      id: "",
      parcelId: "",
      province: "",
      area: "",
      surveyNo: "",
      city: "",
    },
  });
  const successful=()=>{
   <p>Land Added Successfully</p>
  }
  const onSubmit = (data) => {
    console.log("Submitted data ", data);
    localStorage.setItem("id", data.id);
    localStorage.setItem("parcelId", data.parcelId);
    localStorage.setItem("province", data.province);
    localStorage.setItem("area", data.area);
    localStorage.setItem("surveyNo", data.surveyNo);
    localStorage.setItem("city", data.city);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="addland-main">
      <h1>Add Land</h1>
      <div className="add-land-main-container">
        <input
          type="number"
          id="id"
          {...register("id", { maxLength: 20 })}
          aria-invalid={errors.id ? "true" : "false"}
          placeholder="  ID"
        />

        <input
          type="number"
          id="parcelId"
          {...register("parcelId")}
          aria-invalid={errors.parcelId ? "true" : "false"}
          placeholder="  Parcel ID"
        />

        {errors.id?.type === "required" && <p role="alert">Id is required</p>}
        {errors.parcelId?.type === "required" && (
          <p role="alert">Parcel Id is required</p>
        )}

        <input
          type="text"
          id="province"
          {...register("province")}
          aria-invalid={errors.province ? "true" : "false"}
          placeholder="  Province"
        />
        {errors.province?.type === "required" && (
          <p role="alert">Province is required</p>
        )}

        <input
          type="text"
          id="city"
          {...register("city", { maxLength: 10 })}
          aria-invalid={errors.city ? "true" : "false"}
          placeholder="  City"
        />
        {errors.city?.type === "required" && (
          <p role="alert">city is required</p>
        )}

        <input
          type="number"
          id="area"
          {...register("area")}
          aria-invalid={errors.area ? "true" : "false"}
          placeholder="  Area(Sq.Km)"
        />
        {errors.area?.type === "required" && (
          <p role="alert">Area is required</p>
        )}

        <input
          type="number"
          id="surveyNo"
          {...register("surveyNo")}
          aria-invalid={errors.surveyNo ? "true" : "false"}
          placeholder="  Survey Number "
        />
        {errors.surveyNo?.type === "required" && (
          <p role="alert">Survey Number is required</p>
        )}
        <input
          type="number"
          id="mapsheetId"
          {...register("mapsheetId")}
          aria-invalid={errors.mapsheetId ? "true" : "false"}
          placeholder="  MapSheet ID "
        />
        {errors.mapsheetId?.type === "required" && (
          <p role="alert">Survey Number is required</p>
        )}
        <input
          type="text"
          id="street"
          {...register("street")}
          aria-invalid={errors.street ? "true" : "false"}
          placeholder="  Street "
        />
        {errors.surveyNo?.type === "required" && (
          <p role="alert">Streetis required</p>
        )}

    
      </div>
        <button id="btn"
        onClick={successful()} type="submit">
          Add Land
        </button>
    </form>
  );
};

export default EditProfile;
