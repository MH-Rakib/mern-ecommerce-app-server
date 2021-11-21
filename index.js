// imports
const authRoute = require("./Routes/authentication");
const productRoute = require("./Routes/product");
const userRoute = require("./Routes/user");
const orderRoute = require("./Routes/order");
const cartRoute = require("./Routes/cart");

const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config(); // environment variables
const mongoose = require("mongoose");

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.44dd5.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const dbConnection = () => {
  mongoose
    .connect(uri)
    .then(() => console.log("DB connected Successfully"))
    .catch((err) => {
      console.log("Error:" + err);
    });
};

dbConnection();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan());

// Routes
app.use("/api/auth", authRoute);
app.use("/api/product", productRoute);
// app.use("/api/auth", authRoute);
// app.use("/api/auth", authRoute);
// app.use("/api/auth", authRoute);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
