import express from "express";
import {
  countByCity,
  countByType,
  createCommande,
  deleteCommande,
  getCommande,
  getCommandeRooms,
  getCommandes,
  updateCommande,
} from "../controllers/commande.js";
import Commande from "../models/commande.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createCommande);

//UPDATE
router.put("/:id", verifyAdmin, updateCommande);
//DELETE
router.delete("/:id", verifyAdmin, deleteCommande);
//GET

router.get("/find/:id", getCommande);
//GET ALL

router.get("/", getCommandes);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getCommandeRooms);

export default router;
