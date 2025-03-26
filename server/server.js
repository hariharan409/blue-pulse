require('module-alias/register');
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mainRouter = require("@/routes/mainRouter.js");

const app = express();
const PORT = process.env.APP_PORT;

// Set CORS options
const CORS_OPTIONS = {
    origin: ['http://localhost:5173'], // frontend and the backend hosted on different domain, so maually handling the cors
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

// enable cors for all routes
app.use(cors(CORS_OPTIONS));

// middleware to handle post & put request. payload size - 50mb
app.use(express.json({limit: "50mb"})); 
// api-routes
app.use("/web-service",mainRouter);

app.listen(PORT,() => {
    console.log(`blue pulse server running on port ${PORT}`);
});