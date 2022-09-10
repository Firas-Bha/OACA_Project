import Commande from "../models/commande.js";
import Room from "../models/Room.js";

export const createCommande = async (req, res, next) => {
  const newCommande = new Commande(req.body);

  try {
    const savedCommande = await newCommande.save();
    res.status(200).json(savedCommande);
  } catch (err) {
    next(err);
  }
};
export const updateCommande = async (req, res, next) => {
  try {
    const updatedCommande = await Commande.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedCommande);
  } catch (err) {
    next(err);
  }
};
export const deleteCommande = async (req, res, next) => {
  try {
    await Commande.findByIdAndDelete(req.params.id);
    res.status(200).json("Commande has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getCommande = async (req, res, next) => {
  try {
    const Commande = await Commande.findById(req.params.id);
    res.status(200).json(Commande);
  } catch (err) {
    next(err);
  }
};
export const getCommandes = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const Commandes = await Commande.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max || 999 },
    }).limit(req.query.limit);
    res.status(200).json(Commandes);
  } catch (err) {
    next(err);
  }
};
export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Commande.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
export const countByType = async (req, res, next) => {
  try {
    const CommandeCount = await Commande.countDocuments({ type: "Commande" });
    const apartmentCount = await Commande.countDocuments({ type: "apartment" });
    const resortCount = await Commande.countDocuments({ type: "resort" });
    const villaCount = await Commande.countDocuments({ type: "villa" });
    const cabinCount = await Commande.countDocuments({ type: "cabin" });

    res.status(200).json([
      { type: "Commande", count: CommandeCount },
      { type: "apartments", count: apartmentCount },
      { type: "resorts", count: resortCount },
      { type: "villas", count: villaCount },
      { type: "cabins", count: cabinCount },
    ]);
  } catch (err) {
    next(err);
  }
};

export const getCommandeRooms = async (req, res, next) => {
  try {
    const Commande = await Commande.findById(req.params.id);
    const list = await Promise.all(
      Commande.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.status(200).json(list)
  } catch (err) {
    next(err);
  }
};
