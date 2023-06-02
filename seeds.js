import mongoose from "mongoose";
import StoreModel from "./models/Store.js";
import ProductModel from "./models/Product.js";

mongoose
    .connect("mongodb+srv://melonesco:qwerty12345@cluster.2qfeyot.mongodb.net/max?retryWrites=true&w=majority")
    .then(() => console.log("DB connected"))
    .catch((err) => console.error("DB connection error:", err));

const seedDatabase = async () => {
  try {
    const products = [
      {
        name: "Product 1",
        price: 10,
      },
      {
        name: "Product 2",
        price: 15,
      },
      {
        name: "Product 3",
        price: 20,
      },
      {
        name: "Product 4",
        price: 10,
      },
      {
        name: "Product 5",
        price: 15,
      },
      {
        name: "Product 6",
        price: 20,
      },
      {
        name: "Product 7",
        price: 40,
      },
    ];

    const createdProducts = await ProductModel.insertMany(products);

    const data = [
      {
        shop: "Store 1",
        address: "Store 1 address",
        products: createdProducts.slice(0, 4).map((product) => product._id),
      },
      {
        shop: "Store 2",
        address: "Store 2 address",
        products: createdProducts.slice(1, 5).map((product) => product._id),
      },
      {
        shop: "Store 3",
        address: "Store 3 address",
        products: createdProducts.slice(2, 6).map((product) => product._id),
      },
    ];

    await StoreModel.insertMany(data);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding the database:", error);
  } finally {
    mongoose.disconnect();
  }
};

seedDatabase();
