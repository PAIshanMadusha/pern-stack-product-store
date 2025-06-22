import express from "express";
import {
  createAProduct,
  getAProduct,
  getAllProducts,
  updateAProduct,
  deleteAProduct,
} from "../controllers/productController.js";

const router = express.Router();

//Create A Product
router.post("/", createAProduct);

// Get A Product By ID
router.get("/:id", getAProduct);

//Get All Products
router.get("/", getAllProducts);

// Update A Product
router.put("/:id", updateAProduct);

// Delete A Product
router.delete("/:id", deleteAProduct);

export default router;
