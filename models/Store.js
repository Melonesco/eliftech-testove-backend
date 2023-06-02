import mongoose from "mongoose";

const StoreSchema = new mongoose.Schema({
  shop: String,
  address: String,
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
});

export default mongoose.model("Store", StoreSchema);
