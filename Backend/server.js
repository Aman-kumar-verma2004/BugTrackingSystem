const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");


const app = express();
dotenv.config();
//middlewares
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;


//Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/bug", bugRoutes);


//mongodb connected
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDb Connected"))
    .catch(err => {
        console.log(err);
    })



app.listen(PORT, (req, res) => {
    console.log(`Server is live at ${PORT}`);
})

