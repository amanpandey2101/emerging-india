import * as React from 'react';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import './Table.css'

function createData(name, date,trackingId,status) {
  return { name, date,trackingId,status};
}
const makeStyle=(status)=>{
  if(status == "Approved"){
    return{
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    } 
  }
  else if(status === 'Pending')
  {
    return{
      background: '#ffadad8f',
      color: 'red',
    }
  }
  else{
    return{
      background: '#59bfff',
      color: 'white',
    }
  }
}
const rows = [
  createData('Avinash Singh', "26-Dec-2022", "2122", "Approved"),
  createData('Rinku Singh', "26-Dec-2022", "2122", "Pending"),
  createData('Mahendra Sharma', "26-Dec-2022", "2122", "Pending"),
  createData('Shubham Singh', "26-Dec-2022", "2122", "Pending"),
  createData('Bahrgav Sharma', "26-Dec-2022", "2122", "Pending"),
];

export default function BasicTable() {
  return (
    <div className="Table">

    <h3>
        Recent Orders
    </h3>
    <TableContainer component={Paper}
    style={{boxShadow:'0px 13px 20px 0px #80808029'}}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Complainee Name</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Req. Id</TableCell>
            <TableCell align="left">Status</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">{row.trackingId}</TableCell>
              <TableCell align="left">
                  <span className='status' style={makeStyle(row.status)}>
                    {row.status}
                  </span>
                </TableCell>
              <TableCell align="left" className='Details'>Detail</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
