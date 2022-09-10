import Materiel from "../models/materiel.js";
import Room from "../models/Room.js";

export const createMateriel = async (req, res, next) => {
  const newMateriel = new Materiel(req.body);

  try {
    const savedMateriel = await newMateriel.save();
    res.status(200).json(savedMateriel);
  } catch (err) {
    next(err);
  }
};
export const updateMateriel = async (req, res, next) => {
  try {
    const updatedMateriel = await Materiel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedMateriel);
  } catch (err) {
    next(err);
  }
};
export const deleteMateriel = async (req, res, next) => {
  try {
    await Materiel.findByIdAndDelete(req.params.id);
    res.status(200).json("Materiel has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getMateriel = async (req, res, next) => {
  try {
    const Materiel = await Materiel.findById(req.params.id);
    res.status(200).json(Materiel);
  } catch (err) {
    next(err);
  }
};
export const getMateriels = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const Materiels = await Materiel.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max || 999 },
    }).limit(req.query.limit);
    res.status(200).json(Materiels);
  } catch (err) {
    next(err);
  }
};
export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Materiel.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
export const countByType = async (req, res, next) => {
  try {
    const MaterielCount = await Materiel.countDocuments({ type: "Materiel" });
    const apartmentCount = await Materiel.countDocuments({ type: "apartment" });
    const resortCount = await Materiel.countDocuments({ type: "resort" });
    const villaCount = await Materiel.countDocuments({ type: "villa" });
    const cabinCount = await Materiel.countDocuments({ type: "cabin" });

    res.status(200).json([
      { type: "Materiel", count: MaterielCount },
      { type: "apartments", count: apartmentCount },
      { type: "resorts", count: resortCount },
      { type: "villas", count: villaCount },
      { type: "cabins", count: cabinCount },
    ]);
  } catch (err) {
    next(err);
  }
};

export const getMaterielRooms = async (req, res, next) => {
  try {
    const Materiel = await Materiel.findById(req.params.id);
    const list = await Promise.all(
      Materiel.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.status(200).json(list)
  } catch (err) {
    next(err);
  }
};
