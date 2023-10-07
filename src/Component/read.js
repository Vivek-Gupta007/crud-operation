import * as React from 'react';
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Button } from '@mui/material';
import _ from 'lodash';
import { Link } from 'react-router-dom';

const ReadComponent = () => {

  const [data, setData] = useState();
  const handleRead = (id, name, email) => {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("id", id);
  }

  const handleDelete = (id) => {
    axios.delete(`https://651e63e744a3a8aa47683f4c.mockapi.io/Users/${id}`)
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      })
  }

  useEffect(() => {
    axios.get("https://651e63e744a3a8aa47683f4c.mockapi.io/Users")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])
  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {_.map(data, (value) => (
            <TableRow
              key={value.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {value.id}
              </TableCell>
              <TableCell align="center">{value.name}</TableCell>
              <TableCell align="center">{value.email}</TableCell>
              <TableCell><Link to={'/edit'}><Button variant="contained" onClick={() => handleRead(value.id, value.name, value.email)}>Edit</Button></Link></TableCell>
              <TableCell><Button variant="contained" color="error" onClick={() => handleDelete(value.id)}>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Link to={'/'} style={{display:'flex', placeContent:"center",margin:"2em 2em"}}><Button variant="contained">Create</Button></Link>
    </>
  );
}

export default ReadComponent;