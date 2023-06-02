import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import * as path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as StoreController from "./controllers/StoreController.js";
import * as DeliveryController from "./controllers/DeliveryController.js";

mongoose
    .connect(
        "mongodb+srv://melonesco:qwerty12345@cluster.2qfeyot.mongodb.net/max?retryWrites=true&w=majority"
    )
    .then(() => console.log("DB OK"))
    .catch((err) => console.log("DB error", err));

const app = express();
app.use(express.json());
app.use(cors());

app.get("/stores", StoreController.getAllStores);
app.get("/stores/:id", StoreController.getStoreById);
app.get("/delivery", DeliveryController.getAllDeliveries);
app.post("/delivery", DeliveryController.createDelivery);


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT || 5000;
const root = path.join(__dirname, "client", "build");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        hello: "hi!"
    });
});


// app.use('/.netlify/functions/api', router)
// module.exports.handler = serverless(app)

// app.use(express.static(root));
// app.get("*", (req, res) => {
//     res.sendFile("index.html", { root });
// });

app.listen(PORT, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log("Server OK");
});

