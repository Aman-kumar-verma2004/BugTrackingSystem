const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoutes = require( './routes/authRoutes');
const bugRoutes = require( './routes/bugRoutes');
const uploadRoutes = require('./routes/uploadRoutes')
const { createServer } = require('http');
const {Server} = require("socket.io")

const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors : {
        origin : '*',
    },
})


dotenv.config();


//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}))

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;


//Routes
app.use("/api/auth", authRoutes);
app.use("/api/bug", bugRoutes);
app.use('/uploads', express.static("uploads"))
app.use('/api', uploadRoutes)

//mongodb connected
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDb Connected"))
    .catch(err => {
        console.log(err);
    })

io.on("connection", (socket) => {
    console.log("new Client added", socket.id);

    socket.on("createIssue", (newIssue) => {
        io.emit("newIssue", newIssue);
    })

    socket.on("UpdateIssue", (UpdateIssue) => {
        io.emit("updateissue", UpdateIssue);
    })

    socket.on("deleteIssue", (issueId) => {
        io.emit("deletedIssue", issueId)
    })

    socket.on("disconnect",() => {
        console.log("Client Disconnected", socket.id);
    })
})



app.listen(PORT, (req, res) => {
    console.log(`Server is live at ${PORT}`);
})

