<p align="center">
  <h1 align="center" >🛒 Product Store</h1>
  <h3 align="center">BUILD WITH THE PERN STACK & CLIENT-SERVER ARCHITECTURE</h3>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" width="155"/>&nbsp;&nbsp;&nbsp;
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" width="155"/>&nbsp;&nbsp;&nbsp;
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" width="103"/>&nbsp;&nbsp;&nbsp;
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" width="111"/>&nbsp;&nbsp;&nbsp;
</p>

---

**Product Store** is a fullstack web application built with the **PERN stack** (PostgreSQL, Express, React, Node.js). It uses **PostgreSQL via Neon** as the database and allows users to **add**, **view**, **edit**, and **delete** product entries. The app features **light/dark theme toggling**, **Arcjet** for bot protection and rate limiting, and a smooth, responsive UI built with **Tailwind CSS** and **daisyUI**.

---

## 🚀 Features:

* 🌐 Full client-server architecture (Frontend + Backend).
* 📝 Add, edit, and delete products (name, brand, description, price, image).
* 🌙 Theme switcher with Zustand and localStorage.
* 📦 PostgreSQL database hosted on [Neon](https://neon.com/).
* 🛡️ Arcjet integration for: Bot detection `detectBot`, Rate limiting `tokenBucket`.
* ✨ Clean and responsive UI using Tailwind CSS and daisyUI.
* 🔐 Helmet & CORS for basic security.

---

## 🧰 Tech Stack:
The following tech stack is used in this project (Frontend & Backend):

| Dependency                   | Description                               |
| ---------------------------- | ----------------------------------------- |
| React 19 + Vite: build tool  | Modern frontend framework + fast bundler  |
| **Zustand**                  | Lightweight state management              |
| **Tailwind CSS**             | Utility-first CSS framework               |
| **daisyUI**                  | Tailwind-based UI component library       |
| **React Router DOM**         | Client-side routing                       |
| **Axios**                    | HTTP client for making API requests       |
| **Lucide Icons**             | Beautiful open-source icon set            |
| **React Hot Toast**          | Toast notification library                |
| ---------------------------- | ----------------------------------------- |
| **Node.js + Express**        | Server runtime and web framework          |
| **PostgreSQL**               | Relational database (via Neon serverless) |
| **@neondatabase/serverless** | Client for Neon-hosted PostgreSQL         |
| **Helmet**                   | Secures HTTP headers                      |
| **CORS**                     | Enables Cross-Origin Resource Sharing     |
| **Morgan**                   | HTTP request logger                       |
| **Arcjet**                   | Bot detection and rate limiting           |

---

## ⚙️ How to Run the Project:
Follow these steps to successfully run the project:

### 1. Clone the repository:

```bash
https://github.com/PAIshanMadusha/pern-stack-product-store.git
```

##### And, navigate to the project directory:

```bash
cd pern-stack-product-store
```

### 2. Create `.env` File:

##### At the root of the project, create a `.env` file and add the following credentials.
##### Go to [**Neon**](https://neon.tech/) and sign in or create an account. Create a new project and copy your ** 🔐 database connection details** from the dashboard.
##### Then go to [**Arcjet**](https://arcjet.com/), log in, create a new site, and get your `🔐 ARCJET_KEY` from the **SDK Configuration** section.
##### Paste everything in your `.env` like this:

```env
PORT=3000

PGUSER=[your_neon_user]
PGPASSWORD=[your_neon_password]
PGHOST=[your_neon_host]
PGDATABASE=[your_neon_db]

ARCJET_KEY=[your_arcjet_key]

NODE_ENV=production
```

### 3. Install Dependencies, Build & Start (Production):

##### To prepare the app for production:

```bash
npm run build
```

##### Then start the application:

```bash
npm start
```

##### ✅ If everything is successful, your terminal should show:

```
Database initialized
Server is running on port: 3000
```

---

### ⚙️ Development Mode (Optional):

##### To run in development mode, edit your `.env` file and set:

```env
NODE_ENV=development
ARCJET_ENV=development
```

##### Then, navigate to the `pern-stack-product-store\server` and `pern-stack-product-store\client` folders and start both:

```bash
npm run dev
```

##### ✅ If successful, you should see the following in the **client** terminal:

```
http://localhost:5173/
```

##### ✅ And in the **server** terminal:

```
Database initialized
Server is running on port: 3000
```

### 🧪 Add Sample Products (Optional):

##### To quickly populate your database with test products, run this script from the root:

```bash
node server/seeds/products.js
```

##### ✅ This will insert a few sample items you can use to test the UI.

---

## 🧾 Scripts:
Use these commands to manage the app in development and production environments:

| Command         | Description                                                          |
| --------------- | -------------------------------------------------------------------- |
| `npm install`   | Install dependencies for both Client and Server                      |
| `npm run dev`   | Run the app in development mode (client & server)                    |
| `npm run build` | Install all dependencies and build frontend & backend for production |
| `npm start`     | Start the app in production mode                                     |

## 📸 System Screenshots:
These screenshots illustrate how the system appears on desktop and mobile devices:

---
<p align="center">
  <img src="https://github.com/user-attachments/assets/bd498c73-fbf8-4e3f-ad8a-cc93f5b83eab" alt="Screenshot 1" width="700">
  <br><br>
  <img src="https://github.com/user-attachments/assets/4dd0f294-631f-4980-8642-d791f83afe30" alt="Screenshot 3" width="700">
  <br><br>
  <img src="https://github.com/user-attachments/assets/f60855e3-8c48-4b41-995d-692c318143f6" alt="Screenshot 4" width="700">
  <br><br>
  <img src="https://github.com/user-attachments/assets/39cc34f5-f6d6-4af4-affa-3ff8b7e7da36" alt="Screenshot 4" width="700">
  <br><br>
  <img src="https://github.com/user-attachments/assets/24d51e52-096f-41eb-a248-2f9493f1ed83" alt="Screenshot 4" width="700">
  <br><br>
  <img src="https://github.com/user-attachments/assets/4ba26f03-cd16-4e87-a9be-b8adc4c26a4b" alt="Screenshot 4" width="340">&nbsp;&nbsp;&nbsp;
  <img src="https://github.com/user-attachments/assets/749b7451-b613-48f1-9490-76bfd5c4ac28" alt="Screenshot 4" width="340">
</p>

---

### 👨‍💻 Created by: 
**Ishan Madhusha**  
GitHub: [PAIshanMadusha](https://github.com/PAIshanMadusha)

Feel free to explore my work and get in touch if you'd like to collaborate! 🚀

---

## 📝 License:  
This project is licensed under the MIT License : See the [LICENSE](LICENSE) file for details.
