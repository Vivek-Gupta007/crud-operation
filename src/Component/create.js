import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Button } from '@mui/material';
import '../Assests/create.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateComponent = () => {
  const [persondetail, setPersonDetail] = useState('');
  const history = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    onSubmit: (values, { resetForm }) => {
      setPersonDetail(values);
      axios.post("https://651e63e744a3a8aa47683f4c.mockapi.io/Users", {
        name: values.name,
        email: values.email
      })
      resetForm();
    },
  });

  return (
    <>
      <div className='main-box'>
        <form onSubmit={formik.handleSubmit}>
          <h1 style={{ textAlign: "center" }}>Create</h1>
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
            <Button onClick={() => { history("/read") }} variant='contained'>Read Data</Button>
            <Button type="submit" variant="contained">Submit</Button>
          </div>
        </form>
      </div>
    </>
  )
}

export default CreateComponent;