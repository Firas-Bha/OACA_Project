import mongoose from "mongoose";
const CommandeSchema = new mongoose.Schema({
  libelle: {
    type: String,
    required: true,
  },
  fournisseur: {
    type: String,
    required: true,
  },

  DateCommande: {
    type: Date,
    default: new Date(),
},
});

export default mongoose.model("Commande", CommandeSchema)