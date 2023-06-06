import { useState } from "react";
 
import "./App.css";
import { useFormik } from "formik";
import { signUpSchema } from "./schema";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};
function App() {
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema:signUpSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });
  // console.log()
  return (
    <>
      <h1 style={{textAlign:"center"}}> SignUp Form With "Formik" and "Yup"</h1>
      <div className="container wrap">
      <div className="box">
      <div className="row">
      <div className="col formWrapper">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.name && touched.name? <p>{errors.name}</p>:null}
        <br/>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email? <p>{errors.email}</p>:null}
        <br/>
        <input
          type="text"
          name="password"
          id="password"
          placeholder="password"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password? <p>{errors.password}</p>:null}
        <br/>
        <input
          type="text"
          name="confirm_password"
          id="confirm_password"
          placeholder="confirm_password"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.confirm_password && touched.confirm_password? <p>{errors.confirm_password}</p>:null}
        <br/>
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
      </div>
      <div className="col imageWrapper">
      <div style={{overflowWrap:"break-word"}}></div>
      </div>

      </div>
      </div>
      </div>
      
    </>
  );
}

export default App;



// import React from 'react'

// export default function App() {
//   // let str = "Deepak"
//   // let str2= ""
//   // for(let i=str.length-1 ;i>=0;i--){
//   //   str2 = str2  + str[i]
//   // }
//   // console.log(str2)


//   let namestr = "Mohit"
//   let newstr = namestr.split("")
//   let final = newstr[newstr.length-1]
//   console.log(final)


//   return (
//     <div>
      
//     </div>
//   )
// }
