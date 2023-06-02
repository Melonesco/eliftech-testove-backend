import { StoreModel } from "../models/index.js";

export const getAllStores = async (req, res) => {
  try {
    const stores = await StoreModel.find().populate("products").exec();

    res.json(stores);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getStoreById = async (req, res) => {
  const { id } = req.params;

  try {
    const store = await StoreModel.findById(id);
    if (!store) {
      return res.status(404).json({ error: "Store not found" });
    }
    res.json(store);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
