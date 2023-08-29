import product from "../schema/product.js"


 export const createproduct = async(req,res)=>{
    
  try{
      const data = new product({
       
        ItemName:req.body.Name,
        ItemPrice:req.body.Price
    })
 
    await data.save();
    res.status(200).json(data)
    console.log("new product created") 
   
}catch(err){
  res.status(404).json(err)
}
 }

export const getproduct = async(req, res)=>{
  const getAll = await product.find()
  res.status(200).json(getAll)
  console.log("get product");
}





