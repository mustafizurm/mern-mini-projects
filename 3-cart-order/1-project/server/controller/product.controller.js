const Product = require("../model/product.model")

exports.createProduct = async (req, res, next) => {
    const {pName, pDescription, oldPrice, newPrice, color, size} = req.body;

    const newProduct = {
        pName, pDescription, oldPrice, newPrice, color,size
    }

    const product = await Product.create(newProduct);

   await product.save()

    res.json({message: "product create successfully", product})
};


exports.getAllProducts = async (req, res, next) => {
    
    const products = await Product.find();
    
    res.status(200).json({
        message: "All Products",
        product: products
    })
}

exports.getProduct = async (req,res,next) => {
    const pId = req.params.id;
    const product = await Product.find({_id: pId})

    res.status(200).json({
        success: true,
        message: "Single product",
        product
    })
}

exports.deleteProduct = async (req, res, next) => {
    const pId = req.params.id;

    const product = await Product.findByIdAndDelete({_id:pId})

    res.json({
        message: "Product remove successfully",
        rpId: product._id
    })
}