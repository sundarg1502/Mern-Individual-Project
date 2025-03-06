# MERN Stack Product Selling App

A simple product selling application built with the MERN stack (MongoDB, Express, React, Node.js).

## Features

- View all products with search and filter functionality
- View detailed information about each product
- Add new products
- Edit existing products
- Delete products

## Technologies Used

- **Frontend**:
  - React
  - React Router for navigation
  - Axios for API requests
  - CSS for styling (no Bootstrap)
  - Lucide React for icons

- **Backend**:
  - Node.js with Express
  - MongoDB with Mongoose
  - RESTful API architecture

## Getting Started

### Prerequisites

- Node.js
- MongoDB (running locally or a MongoDB Atlas account)

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. In a separate terminal, start the backend server:
   ```
   npm run server
   ```

## API Endpoints

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get a single product by ID
- `POST /api/products` - Create a new product
- `PUT /api/products/:id` - Update a product
- `DELETE /api/products/:id` - Delete a product

## Project Structure

```
├── public/
├── server/
│   ├── models/
│   │   └── productModel.js
│   ├── routes/
│   │   └── productRoutes.js
│   └── index.js
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── ProductCard.jsx
│   ├── pages/
│   │   ├── AddProduct.jsx
│   │   ├── EditProduct.jsx
│   │   ├── Home.jsx
│   │   ├── ProductDetail.jsx
│   │   └── ProductList.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
└── package.json
```