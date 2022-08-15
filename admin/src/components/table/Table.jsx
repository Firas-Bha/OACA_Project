import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React from 'react'
import ReactDOM from 'react-dom'
import useFetch from "../../hooks/useFetch";

const options = [
  {
    label: "Informatique",
    value: "Informatique",
  },
  {
    label: "Télecommunication",
    value: "Télecommunication",
  },
];
const List = () => {
  const { data, loading, error } = useFetch("/posts");

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Client</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Title</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          
            {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row._id}</TableCell>
              <TableCell className="tableCell">{row.name}</TableCell>
              <TableCell className="tableCell">{row.createdAt}</TableCell>
              <TableCell className="tableCell">{row.title}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
