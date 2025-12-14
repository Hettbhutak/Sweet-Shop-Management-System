#  Sweet Shop Management System

The **Sweet Shop Management System** is a full-stack web application designed to manage the day-to-day operations of a sweet shop. It helps in handling products, inventory, orders, billing, and users efficiently through a centralized system.

This repository contains both **backend** and **frontend** code.

---

## ✨ Features

- Product and inventory management  
- Order and billing system  
- User authentication and authorization  
- RESTful APIs  
- Frontend interface for easy interaction  
- Modular and scalable architecture  

---

## 📁 Project Structure

Sweet-Shop-Management-System/
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middlewares/
│ ├── config/
│ ├── .env.example
│ ├── server.js
│ └── package.json
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── assets/
│ │ └── index.js
│ └── package.json
├── .gitignore
└── README.md


---

##  Getting Started

### Clone the Repository

```bash
git clone https://github.com/Hettbhutak/Sweet-Shop-Management-System.git

cd Sweet-Shop-Management-System

 Backend Setup
  Navigate to Backend Folder
cd backend

 Install Dependencies
npm install

 Environment Configuration

Create a .env file using .env.example:

cp .env.example .env


Update .env with your configuration:

PORT=5000
DATABASE_URL=your_database_connection
JWT_SECRET=your_secret_key


 Do not upload your .env file to GitHub.

 Run Backend Server
npm run dev


Backend will run at:

http://localhost:5000

 Frontend Setup
 Navigate to Frontend Folder
cd ../frontend
 Install Dependencies
npm install

 Start Frontend Server
npm start


Frontend will be available at:

http://localhost:3000

 API Endpoints (Sample)
Method	Endpoint	Description
GET	/api/products	Get all products
POST	/api/products	Add new product
GET	/api/orders	Get all orders
POST	/api/users/login	User login

(Endpoints may vary based on implementation)

 Technologies Used

Backend: Node.js, Express.js

Frontend: React.js

Database: MongoDB / MySQL

Authentication: JWT
