import { addProduct, getProducts, removeProduct, updateProduct } from "../controllers/ProductController.js";
import express from 'express';

const productsRoute = express.Router();

productsRoute.post("/add", addProduct);
productsRoute.get("/all", getProducts);
productsRoute.put("/edit/:id", updateProduct);
productsRoute.delete("/remove/:id", removeProduct)

export default productsRoute;
