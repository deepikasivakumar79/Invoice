import mongoose from "mongoose";


const product= new mongoose.Schema({

    
    
    ItemName:{
        type:String,
        required:true,
        unique:true,
    },

    ItemPrice:{
        type:Number,
        
    }

    
})



export default mongoose.model("product",product);