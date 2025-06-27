import { sql } from "../config/db.js";

const SAMPLE_PRODUCTS = [
  {
    name: "Apple iPhone 14",
    brand: "Apple",
    description:
      "The iPhone 14 features a stunning Super Retina XDR display, powerful A15 Bionic chip, and an advanced dual-camera system. Perfect for capturing life's moments.",
    price: 999.99,
    image:
      "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=500&auto=format&fit=crop&q=60",
  },
  {
    name: "Samsung Galaxy S23",
    brand: "Samsung",
    description:
      "Experience the Galaxy S23 with a dynamic AMOLED display, lightning-fast performance, and pro-grade camera to capture stunning photos day or night.",
    price: 899.99,
    image:
      "https://images.unsplash.com/photo-1705530292519-ec81f2ace70d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2Ftc3VuZyUyMEdhbGF4eSUyMFMyM3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Xiaomi Mi 13 Pro",
    brand: "Xiaomi",
    description:
      "Mi 13 Pro combines sleek design with powerful internals, a Leica co-engineered camera, and top-tier charging capabilities.",
    price: 799.99,
    image:
      "https://images.unsplash.com/photo-1623385245725-2c39e44567e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8WGlhb21pJTIwTWklMjAxMyUyMFByb3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Bluetooth Headphones",
    brand: "Sony",
    description:
      "Sony wireless headphones offer crystal-clear audio, active noise cancellation, and all-day comfort for music lovers and professionals.",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1628329567705-f8f7150c3cff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Qmx1ZXRvb3RoJTIwSGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Smartwatch",
    brand: "Fitbit",
    description:
      "Track your health and fitness goals with Fitbit's smartwatch featuring heart rate monitoring, sleep tracking, and built-in GPS.",
    price: 149.99,
    image:
      "https://plus.unsplash.com/premium_photo-1712764121254-d9867c694b81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U21hcnR3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Gaming Mouse",
    brand: "Razer",
    description:
      "Engineered for speed and precision, the Razer gaming mouse features customizable buttons, RGB lighting, and ergonomic design.",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1628832307345-7404b47f1751?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R2FtaW5nJTIwTW91c2V8ZW58MHx8MHx8fDA%3D",
  },
];

// Function to seed the database with sample products
async function seedDatabase() {
  try {
    // Clear existing products
    await sql`TRUNCATE TABLE products RESTART IDENTITY`;

    // Insert sample products
    for (const product of SAMPLE_PRODUCTS) {
      await sql`
                INSERT INTO products (name, brand, description, price, image)
                VALUES (${product.name}, ${product.brand}, ${product.description}, ${product.price}, ${product.image})
            `;
    }

    console.log("Database seeded with sample products!");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
}

// Run the seed function
seedDatabase();