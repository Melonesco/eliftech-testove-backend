import { DeliveryModel } from "../models/index.js";

export const createDelivery = async (req, res) => {
  try {
    const { name, email, tel, address, totalPrice, vendor, products } =
      req.body;

    const delivery = new DeliveryModel({
      name,
      email,
      tel,
      address,
      totalPrice,
      vendor,
      products,
    });

    await delivery.save();

    res.status(200).json({ success: true, delivery });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getAllDeliveries = async (req, res) => {
  try {
    const deliveries = await DeliveryModel.find().populate("products");
    res.status(200).json({ success: true, deliveries });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
