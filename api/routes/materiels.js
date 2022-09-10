import express from "express";
import {
  countByCity,
  countByType,
  createMateriel,
  deleteMateriel,
  getMateriel,
  getMaterielRooms,
  getMateriels,
  updateMateriel,
} from "../controllers/Materiel.js";
import Materiel from "../models/Materiel.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createMateriel);

//UPDATE
router.put("/:id", verifyAdmin, updateMateriel);
//DELETE
router.delete("/:id", verifyAdmin, deleteMateriel);
//GET

router.get("/find/:id", getMateriel);
//GET ALL

router.get("/", getMateriels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getMaterielRooms);

export default router;
