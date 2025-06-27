import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

import productRoutes from "./routes/productRoutes.js";
import { sql } from "./config/db.js";
import { aj } from "./lib/arcjet.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

console.log(PORT);

app.use(express.json()); // Middleware to parse JSON request bodies
app.use(cors()); // CORS middleware to allow cross-origin requests
app.use(helmet()); //Helmet helps secure Express apps by setting various HTTP headers
app.use(morgan("dev")); // Morgan is a middleware for logging HTTP requests

//Apply Arcject Rate-limiting for all routes
app.use(async (req, res, next) => {
  try {
    const decision = await aj.protect(req, {
      requested: 1,
    });
    if (decision.isDenied()) {
      if (decision.reason.isRateLimit()) {
        res.status(429).json({
          error: "Rate limit exceeded. Please try again later.",
        });
      } else if (decision.reason.isBot()) {
        res.status(403).json({
          error: "Accesss denied. Bots are not allowed.",
        });
      } else {
        res.status(403).json({
          error: "Access denied. You are not allowed to access this resource.",
        });
      }
      return;
    }
    // Check for spoofed bots
    if (
      decision.results.some(
        (result) => result.reason.isBot() && result.reason.isSpoofed()
      )
    ) {
      res
        .status(403)
        .json({ error: "Access denied. Spoofed bots are not allowed." });
      return;
    }
    next();
  } catch (error) {
    console.error("Error in Arcjet protection middleware:", error);
    next(error);
  }
});

app.use("/api/products", productRoutes);

// Initialize the database and create the products table if it doesn't exist
async function initDB() {
  try {
    await sql`
        CREATE TABLE IF NOT EXISTS products(
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            brand VARCHAR(255) NOT NULL,
            description VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL,
            price DECIMAL(10, 2) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`;
    console.log("Database initialized successfully!");
  } catch (error) {
    console.log("Error initializing database: ", error);
  }
}

// Start the server and initialize the database
initDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT);
  });
});
