import mongoose from "mongoose";

const customer = new mongoose.Schema({

    Name:{
        type:String,
        required:true,
        unique:true
    },

    Address:{
        type:String,
        required:true
    },

    Mobile_No:{
        type:Number,
        required:true
    }
})

export default mongoose.model("customer",customer);,