const productModel = require("../model/productModel")

exports.getProducts=async(req,res,next)=>{
    const query=req.query.keyword?{name:{
        $regex:req.query.keyword,
        $options:'i'//this work for removing the concpt of case sensitive
    }}:{}
    const products=await productModel.find(query)
    res.json({
        success:true,
        products
    })
}
exports.getSingleProducts=async(req,res,next)=>{
    try{
        const products=await productModel.findById(req.params.id);
        res.json({
            success:true,
            products
        })
    }catch(error){
        res.status(404).json({
            success:true,
            message:error.message
        })
    }
    
}
