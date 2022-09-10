import Livraison from "../models/livraison.js";
import Room from "../models/Room.js";

export const createLivraison = async (req, res, next) => {
  const newLivraison = new Livraison(req.body);

  try {
    const savedLivraison = await newLivraison.save();
    res.status(200).json(savedLivraison);
  } catch (err) {
    next(err);
  }
};
export const updateLivraison = async (req, res, next) => {
  try {
    const updatedLivraison = await Livraison.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedLivraison);
  } catch (err) {
    next(err);
  }
};
export const deleteLivraison = async (req, res, next) => {
  try {
    await Livraison.findByIdAndDelete(req.params.id);
    res.status(200).json("Livraison has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getLivraison = async (req, res, next) => {
  try {
    const Livraison = await Livraison.findById(req.params.id);
    res.status(200).json(Livraison);
  } catch (err) {
    next(err);
  }
};
export const getLivraisons = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const Livraisons = await Livraison.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max || 999 },
    }).limit(req.query.limit);
    res.status(200).json(Livraisons);
  } catch (err) {
    next(err);
  }
};
export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Livraison.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
export const countByType = async (req, res, next) => {
  try {
    const LivraisonCount = await Livraison.countDocuments({ type: "Livraison" });
    const apartmentCount = await Livraison.countDocuments({ type: "apartment" });
    const resortCount = await Livraison.countDocuments({ type: "resort" });
    const villaCount = await Livraison.countDocuments({ type: "villa" });
    const cabinCount = await Livraison.countDocuments({ type: "cabin" });

    res.status(200).json([
      { type: "Livraison", count: LivraisonCount },
      { type: "apartments", count: apartmentCount },
      { type: "resorts", count: resortCount },
      { type: "villas", count: villaCount },
      { type: "cabins", count: cabinCount },
    ]);
  } catch (err) {
    next(err);
  }
};

export const getLivraisonRooms = async (req, res, next) => {
  try {
    const Livraison = await Livraison.findById(req.params.id);
    const list = await Promise.all(
      Livraison.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.status(200).json(list)
  } catch (err) {
    next(err);
  }
};

