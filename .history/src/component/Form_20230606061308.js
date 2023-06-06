import React from "react";
import "..//App.css";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { signUpSchema } from "./schema";
import Navbar from "./topbar/Navbar";
import { hover } from "@testing-library/user-event/dist/hover";

export default function Form() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  // console.log(formik)
  return (
    <>
      <Navbar />
      <div className="container mainClass">
        <br />
        <br />
        <h1>Formik Validation SignUp Form</h1>
        <div className="box">
          <form onSubmit={formik.handleSubmit}>
            <TextField
              label="Name"
              htmlFor="name"
              id="name"
              name="name"
              type="text"
              className="m-1"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.touched.name ? (
              <p>{formik.errors.name}</p>
            ) : null}
            <br />
            <TextField
              label="EmailAddress"
              htmlFor="email"
              id="email"
              name="email"
              type="email"
              className="m-1"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email ? (
              <p>{formik.errors.email}</p>
            ) : null}
            <br />
            <TextField
              label="Password"
              htmlFor="password"
              id="password"
              name="password"
              type="password"
              className="m-1"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.errors.password && formik.touched.password ? (
              <p>{formik.errors.password}</p>
            ) : null}
            <br />
            <TextField
              label="ConfirmPassowrd"
              htmlFor="confirm_password"
              id="confirm_password"
              name="confirm_password"
              type="password"
              className="m-1"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirm_password}
            />
            {formik.errors.confirm_password &&
            formik.touched.confirm_password ? (
              <p>{formik.errors.confirm_password}</p>
            ) : null}
            <br />
            {/* <Button type='submit' style={{backgroundColor:"yellow"}} className='submitbtn'><b>SUBMIT</b></Button>  */}
            <button className="submitbtn btn btn-dark" type="submit">
              SUBMIT
            </button>
          </form>
        </div>
        <input
          placeholder="hello just checking"
          style={{
            background: "transparent",
            border: "none",
            border: hover,
            border: "none",
          }}
        />
      </div>
    </>
  );
}
