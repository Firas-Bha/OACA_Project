import express from "express";
import {
  countByCity,
  countByType,
  createLivraison,
  deleteLivraison,
  getLivraison,
  getLivraisonRooms,
  getLivraisons,
  updateLivraison,
} from "../controllers/Livraison.js";
import Livraison from "../models/Livraison.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createLivraison);

//UPDATE
router.put("/:id", verifyAdmin, updateLivraison);
//DELETE
router.delete("/:id", verifyAdmin, deleteLivraison);
//GET

router.get("/find/:id", getLivraison);
//GET ALL

router.get("/", getLivraisons);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getLivraisonRooms);

export default router;
