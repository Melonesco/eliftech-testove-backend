import mongoose from "mongoose";

const DeliverySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
      message: "Некоректний формат електронної пошти",
    },
  },
  tel: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return /^\d{10}$/.test(value);
      },
      message: "Некоректний формат телефонного номеру",
    },
  },
  address: {
    type: String,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
    min: [0, "Загальна вартість повинна бути не менше нуля"],
  },
  vendor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Store",
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
      amount: {
        type: Number,
        required: true,
        min: [1, "Кількість повинна бути не менше одиниці"],
      },
    },
  ],
});

export default mongoose.model("Delivery", DeliverySchema);
