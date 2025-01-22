const Product = require("../model/product.model");

exports.getAllProducts = async (req,res,next) => {

    const {category} = req.query;

    const filter = {}

    if(category && category !== "All" & category !== ""){

        filter.category = category;

        const product = await Product.find(filter)
        console.log(product)
    
    
        res.status(200).json({
            success: true,
            message: "Filter Product",
            product
        })
    } else{
        const product = await Product.find()
        res.status(200).json({
            success: true,
            message: "all product",
            product
        })  
    }


}

exports.createProduct = async (req,res,next) => {
    const {name, description, price, category, images} = req.body;

    const newProduct = {
        name, description, price, category, images
    }
    
    const product = await Product.create(newProduct);
    await product.save();

    res.status(200).json({
      success: true,
      product: product,
    });
}


exports.getSingProduct = async (req,res,next) => {}
exports.updateProduct = async (req,res,next) => {}
exports.deleteProduct = async (req,res,next) => {}