import { addProduct, getProducts, removeProduct, updateProduct, getDetailsById } from "../controllers/ProductController.js";
import express from 'express';

const productsRoute = express.Router();

productsRoute.post("/add", addProduct);
productsRoute.get("/get", getProducts);
productsRoute.put("/edit/:id", updateProduct);
productsRoute.get("/get/:id", getDetailsById);
productsRoute.delete("/remove/:id", removeProduct)

export default productsRoute;
