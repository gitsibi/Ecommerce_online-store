const express = require("express");
const app = express(); 
const ErrorHandler = require("./middleware/error");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const product= require('./controller/product')
const path=require('path')
const orders = require('./controller/orders');

// const corsOptions = {
//     origin: 'http://localhost:5173', // Allow only your frontend origin
//     credentials: true, // Allow cookies and credentials
//   };


const allowedOrigins = [
  'http://localhost:5173', // Local development
  'https://transcendent-clafoutis-c78124.netlify.app', // Production site 1
  'https://glowing-ganache-83cc2c.netlify.app', // Production site 2 (add this origin)
  'https://calm-treacle-f81b77.netlify.app', // newly added
   'https://nimble-sfogliatella-270dc3.netlify.app',
   'https://ecommerce-sibishree.netlify.app'

];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true); // Allow the request
    } else {
      callback(new Error('CORS policy: The origin is not allowed'), false); // Reject the request
    }
  },
  credentials: true, // Allow cookies/credentials
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific methods
};

app.use(cors(corsOptions));



// app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());
app.use("/",express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// Configuration for environment variables
if (process.env.NODE_ENV !== "PRODUCTION") {
    // Load environment variables from the .env file if the environment is not production
    require("dotenv").config({
        path: "backend/config/.env",
    });
};
// Serve static files for uploads and products
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/products', express.static(path.join(__dirname, 'products')));

//import Routes
const user = require("./controller/user");
app.use("/api/v2/user", user);
app.use("/api/v2/product", product);
app.use("/api/v2/orders", orders);
app.use(ErrorHandler);
module.exports= app;