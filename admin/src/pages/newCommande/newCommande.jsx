import "./newCommande.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { commandesInputs} from "../../formSource.js";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import React from 'react'
import ReactDOM from 'react-dom'

const NewCommande = () => {
  const [files, setFiles] = useState("");
  const [info, setInfo] = useState({});
  const [materiel, setMateriels] = useState([]);

  const { data, loading, error } = useFetch("/materiels");

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSelect = (e) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setMateriels(value);
  };
  
  console.log(files)

  const handleClick = async (e) => {
    e.preventDefault();
    try{ 
      const list = await Promise.all(
        Object.values(files).map(async (file) => {
          const data = new FormData();
          data.append("file", file);
          data.append("upload_preset", "upload");
          const uploadRes = await axios.post(
            "https://api.cloudinary.com/v1_1/lamadev/image/upload",
            data
          );

          const { url } = uploadRes.data;
          return url;
        })
      );

      const createCommande = {
        ...info,
       materiel,
        photos: list,
      };

      await axios.post("/commandes", createCommande);
    } catch (err) {console.log(err)}
  };
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Ajouter une Commande</h1>
        </div>
        <div className="bottom">
          
          <div className="right">
            <form>
              

              {commandesInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    onChange={handleChange}
                    type={input.type}
                    placeholder={input.placeholder}
                  />
                </div>
              ))}
              <div></div>
              <div className="selectUser">
                <label>Materiel</label>
                <br></br>
                <select id="user" multiple onChange={handleSelect}>
                  {loading
                    ? "loading"
                    : data &&
                      data.map((materiel) => (
                        <option key={materiel._id} value={materiel._id}>
                          {materiel.titre}
                        </option>
                      ))}
                </select>
              </div>
              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCommande;
