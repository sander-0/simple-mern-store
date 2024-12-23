import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";

import { db } from "./config/db.js";

import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

db();

const __dirname = path.resolve();

app.use(express.json()); // allows us to accept JSON data in the req.body

app.use("/api", productRoutes);

app.listen(PORT, () => {
	console.log("Server started at http://localhost:" + PORT);
});