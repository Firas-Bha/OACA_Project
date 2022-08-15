import React from 'react'
import ReactDOM from 'react-dom'

export const userColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 140,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "country",
    headerName: "Country",
    width: 100,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 140,
  },
  {
    field: "role",
    headerName: "Départment",
    width: 160,
  },
 

];

export const hotelColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "type",
    headerName: "Type",
    width: 100,
  },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
  {
    field: "rooms",
    headerName: "rooms",
    width: 100,
  },
  {
    field: "featured",
    headerName: "featured",
    width: 100,
  },
 
];

export const roomColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "titleroom",
    headerName: "Title",
    width: 230,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 200,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "maxPeople",
    headerName: "Max People",
    width: 100,
  },
  {
    field: hotelColumns.name,
    headerName: "hotel",
    width: 100,
  },
];

export const reclamationColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    
    field: "name",
    headerName: "username",
    width: 232,
  },
  {
    
    field: "title",
    headerName: "Title",
    width: 200,
  },
  
  {
    
    field: "createdAt",
    headerName: "createdAt",
    width: 230,
  },

  {
    
    field: "message",
    headerName: "reclamation",
    width: 230,
  },

];
