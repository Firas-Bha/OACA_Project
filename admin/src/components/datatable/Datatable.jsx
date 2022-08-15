import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { Modal, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import EditRec from "../../pages/editRec/EditRec";
//import modifierRec from "../../pages/modifierRec/modifierRec";

const Datatable = ({columns,post}) => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [selectedPost, setSelectedPost] = useState([]);
  const [list, setList] = useState('');
  const [show, setShow] = useState(false);
  const { data, loading, error } = useFetch(`/${path}`);
  
  

  useEffect(() => {
    setList(data);
  }, [data]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/${path}/${id}`);
      setList(list.filter((item) => item._id !== id));
    } catch (err) {}
  };
  const handleClick = async (id) => {
    try {
      await axios.put(`/{id}`);
      setList(list.filter((item) => item._id !== id));
    } catch (err) {}
  };
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          
          
          <div className="cellAction">
  
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Supprimer
            </div>          
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        {path}
        <Link to={`/${path}/new`} className="link">
         Ajouter
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={list}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row) => row._id}
  
      />
      
    </div>
  );
};

export default Datatable;