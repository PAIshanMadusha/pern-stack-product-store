import express from "express";
import helmet, { contentSecurityPolicy } from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import productRoutes from "./routes/productRoutes.js";
import { sql } from "./config/db.js";
import { getArcjetInstance } from "./lib/arcjet.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

const aj = await getArcjetInstance(); // Async import of Arcjet instance

// Basic middleware
app.use(express.json());
app.use(cors());
app.use(helmet({ contentSecurityPolicy: false }));
app.use(morgan("dev"));

// Arcjet middleware for bot detection and rate limiting
if (aj) {
  app.use(async (req, res, next) => {
    try {
      const decision = await aj.protect(req, { requested: 1 });

      if (decision.isDenied()) {
        if (decision.reason.isRateLimit()) {
          return res.status(429).json({ error: "Rate limit exceeded." });
        }
        if (decision.reason.isBot()) {
          return res.status(403).json({ error: "Bots are not allowed." });
        }
        return res.status(403).json({ error: "Access denied." });
      }

      const spoofed = decision.results.some(
        (r) => r.reason.isBot() && r.reason.isSpoofed()
      );
      if (spoofed) {
        return res.status(403).json({ error: "Spoofed bots not allowed." });
      }

      next();
    } catch (error) {
      console.error("Arcjet middleware error:", error);
      next();
    }
  });
}

// Your API routes
app.use("/api/products", productRoutes);

// Serve client in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
  });
}

// Initialize DB
async function initDB() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        brand VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    console.log("Database initialized successfully!");
  } catch (error) {
    console.error("Error initializing database:", error);
  }
}

initDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Fatal error during server startup:", err);
  });
