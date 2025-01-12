const express = require('express');
const app = express();

// Load config from .env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// Middleware to parse JSON request body
app.use(express.json());

// Simple middleware example
const myMiddleware = (req, res, next) => {
  console.log('Middleware executed');
  next(); // Call next() to pass control to the next middleware
};
app.use(myMiddleware); // Using the middleware globally

// Import routes for TODO API
const todoRoutes = require('./routes/todo');

// Mount the TODO API routes
app.use("/api/v1", todoRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server Started successfully at ${PORT}`);
});

// Connect to the database
const dbConnect = require("./config/Database");
dbConnect();

// Default route
app.get("/", (req, res) => {
  res.send('<h1>This is HomePage babe</h1>');
});
