
    import 'dotenv/config'

import express from "express";
import {createServer} from "node:http";
import {Server} from "socket.io";
import mongoose from "mongoose";
import cors from "cors";

import { connectToSocket } from './controller/socketManager.js';

import userRoutes from "./routes/users.routes.js"

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

// const port = 3000;
app.set("port", (process.env.PORT || 8000));
app.use(cors());    // cors are used for adding securities festures implemented by web browser 
app.use(express.json({limit:"40kb"}));    //can also use bodyParser
app.use(express.urlencoded({limit:"40kb", extended:true}));

app.get("/home",(req,res) => {
    return res.json({hello:"world"});
})
//users routes
app.use("/api/v1/users", userRoutes);


const start = async () => {
    const connectionDb = await mongoose.connect(process.env.MONGO_URL);
    // console.log(connectionDb)
    console.log(`MONGO Connected DB HOst: ${connectionDb.connection.host}`)
    server.listen(app.get("port"), () => {
        console.log("LISTNING ON PORT 8000")
    });
}

start();
