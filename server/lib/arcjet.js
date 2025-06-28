import "dotenv/config";

// This async factory returns Arcjet instance only in production with key
export async function getArcjetInstance() {
  if (process.env.NODE_ENV === "production" && process.env.ARCJET_KEY) {
    const arcjetModule = await import("@arcjet/node");
    const { default: arcjet, tokenBucket, shield, detectBot } = arcjetModule;

    return arcjet({
      key: process.env.ARCJET_KEY,
      characteristics: ["ip.src"],
      rules: [
        shield({ mode: "LIVE" }),
        detectBot({
          mode: "LIVE",
          allow: ["CATEGORY:SEARCH_ENGINE"],
        }),
        tokenBucket({
          mode: "LIVE",
          refillRate: 30,
          interval: 5,
          capacity: 20,
        }),
      ],
    });
  }

  return null; // No Arcjet in development or missing key
}
