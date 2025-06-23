import arcjet, { tokenBucket, shield, detectBot } from "@arcjet/node";
import "dotenv/config";

// Initialize Arcjet
export const aj = arcjet({
  key: process.env.ARCJET_KEY,
  characteristics: ["ip.src"],
  rules: [
    shield({ mode: "LIVE" }),
    detectBot({
      mode: "LIVE",
      // Allow search engine bots to access the site
      allow: ["CATEGORY:SEARCH_ENGINE"],
    }),
    // Rate limiting configuration
    tokenBucket({
      mode: "LIVE",
      refillRate: 5,
      interval: 10,
      capacity: 10,
    }),
  ],
});