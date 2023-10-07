import React, { useEffect } from "react";
import { useFormik } from "formik";
import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const EditComponent = () => {
  const history = useNavigate();
  const idChange = localStorage.getItem("id");
  const nameChange = localStorage.getItem("name");
  const emailChange = localStorage.getItem("email");


  const formik = useFormik({
    initialValues: {
      name: nameChange,
      email: emailChange
    },
    onSubmit: (values) => {
      axios
        .put(`https://651e63e744a3a8aa47683f4c.mockapi.io/Users/${idChange}`, {
          name: values.name,
          email: values.email
        })
        .then(() => {
          history('/read');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });

  return (
    <>
      <div className='main-box'>
        <form onSubmit={formik.handleSubmit}>
          <h1 style={{ textAlign: "center" }}>Update</h1>
          <div className='form-box'>
            <label className='label' htmlFor='name'>Name</label>
            <input
              id='name'
              name='name'
              type='text'
              onChange={formik.handleChange}
              value={formik.values.name} />
          </div>
          <div className='form-box'>
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          <div className='button'>
            <Link to={'/read'}><Button variant='contained'>Read Data</Button></Link>
            <Button variant="contained" type="submit">Update</Button>
          </div>
        </form>
      </div>
    </>
  )
}

export default EditComponent;