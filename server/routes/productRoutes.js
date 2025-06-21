import express from "express";
import {
  getAllProducts,
  createAProduct,
} from "../controllers/productController.js";

const router = express.Router();

//Get All Product
router.get("/", getAllProducts);

//Create A Product
router.post("/", createAProduct);

export default router;
