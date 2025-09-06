import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import {createServer} from 'node:http';
import  {conncectToSocket} from './controllers/socketManager.js';
import userRoutes from './routes/users.routes.js'






const app = express();
const server = createServer(app);
const io = conncectToSocket(server);




app.set("port", process.env.PORT||8000);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.use("/api/v1/users",userRoutes)


app.get("/home", (req, res) => {
   return res.json({message:"API CONNECTED"})
})


const start = async ()=>{
    app.set("mongo_user");
    const connectiondb = await mongoose.connect("mongodb+srv://ConnectAppna:12092004@cluster0.edy7jeq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log(`Database connected: ${connectiondb.connection.host}`);
    server.listen(app.get("port"), ()=>{
        console.log(`Server is running on port ${app.get("port")}`);
    });
}


start();