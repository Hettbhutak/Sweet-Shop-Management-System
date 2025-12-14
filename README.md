
# Sweet Shop Management System

A full-stack application for managing a sweet shop, featuring user authentication, admin controls, inventory management, and a modern UI.

## Features
- User registration and login (JWT-based authentication)
- Admin and regular user roles
- Add, update, delete, search, and purchase sweets
- Inventory management (purchase/restock)
- Responsive React frontend
- PostgreSQL database
- Test-driven backend and frontend

## Tech Stack
- **Backend:** Node.js, TypeScript, Express, TypeORM, PostgreSQL, JWT
- **Frontend:** React, TypeScript, Axios, React Router
- **Testing:** Jest, Supertest, React Testing Library

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- PostgreSQL

### Backend Setup
1. Navigate to the backend folder:
	```
	cd backend
	```
2. Install dependencies:
	```
	npm install
	```
3. Configure your `.env` file (see `.env` example in backend).
4. Start the backend server:
	```
	npm run dev
	```

### Frontend Setup
1. Navigate to the frontend folder:
	```
	cd frontend
	```
2. Install dependencies:
	```
	npm install
	```
3. Start the frontend:
	```
	npm start
	```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Folder Structure
- `backend/` - API, database, authentication, business logic
- `frontend/` - React SPA, UI, API calls

## My AI Usage
This project was developed with the assistance of AI tools:
- **GitHub Copilot**: Used for generating boilerplate code, API endpoints, and React components.
- **How AI was used**: Copilot helped with code suggestions, test generation, and refactoring. All code was reviewed and adapted for project requirements.
- **Reflection**: AI accelerated development, reduced boilerplate, and improved code quality, but all logic and structure were designed and validated by the developer.

## Screenshots
<!-- Add screenshots of your app here -->

## Test Report
<!-- Add your test suite results here after running tests -->

## License
MIT
