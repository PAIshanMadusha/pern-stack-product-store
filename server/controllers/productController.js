import { sql } from "../config/db.js";

// This file contains the controller functions for handling product-related operations
// Controller to create a new product in the database
export const createAProduct = async (req, res) => {
  const { name, image, price } = req.body;
  if (!name || !image || !price) {
    return res.status(400).json({
      success: false,
      message: "Please provide all required fields: name, image, price",
    });
  }
  try {
    const newProduct = await sql`
    INSERT INTO products (name, image, price) VALUES (${name}, ${image}, ${price}) RETURNING *;
    `;
    console.log("Product created successfully:", newProduct);
    res.status(201).json({ success: true, data: newProduct[0] });
  } catch (error) {
    console.error("Error creating product:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to create product!" });
  }
};

// Controller to fetch a single product by ID from the database
export const getAProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await sql`
    SELECT * FROM products WHERE id = ${id}
    `;
    console.log("A single product fetched successfully:", product);
    res.status(200).json({ success: true, data: product[0] });
  } catch (error) {
    console.error("Error fetching a single product:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch a single product!" });
  }
};

// Controller to fetch all products from the database
export const getAllProducts = async (req, res) => {
  try {
    const products = await sql`
        SELECT * FROM products ORDER BY created_at DESC
        `;
    console.log("Products fetched successfully:", products);
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error("Error fetching products:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch products!" });
  }
};

// Controller to update a product by ID in the database
export const updateAProduct = async (req, res) => {
  const { id } = req.params;
  const { name, image, price } = req.body;
  try {
    const updatedProduct = await sql`
    UPDATE products SET name = ${name}, image = ${image}, price= ${price} WHERE id = ${id}
    RETURNING *;
    `;
    if (updatedProduct.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Product not found!",
      });
    }
    console.log("Product updated successfully:", updatedProduct);
    res.status(200).json({ success: true, data: updatedProduct[0] });
  } catch (error) {
    console.error("Error updating product:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to update product!" });
  }
};

// Controller to delete a product by ID from the database
export const deleteAProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await sql`
        DELETE FROM products WHERE id = ${id} RETURNING *;
        `;
    if (deletedProduct.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Product not found!",
      });
    }
    console.log("product deleted successfully:", deletedProduct);
    res.status(200).json({ success: true, data: deletedProduct });
  } catch (error) {
    console.error("Error deleting product:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to delete product!" });
  }
};
