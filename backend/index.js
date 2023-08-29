import express from "express";
const app =express();
import mongoose from "mongoose";
import dotenv from "dotenv"
import cors from "cors";
import product from "./routes/InvoiceRt.js";
dotenv.config()

app.use(cors());
app.use(express.json());
app.use("/Invoice",product);



mongoose.set("strictQuery",true)
const connect = async()=>{
    try{
        await mongoose.connect(process.env.URL);
        console.log("database connected");
    }catch(err){
        console.log(err);
    }
}



app.listen(5000 ,()=>{
     connect();
    console.log("server is running");
});


