const Product = require("../model/product.model");
const AddToCart = require("../model/addToCart.model");

// exports.createAddToCart = async (req, res, next) => {
//   const { color, size } = req.body;
//   const user = req.user;
//   const userId = user._id;
//   const productId = req.body.productId;

//   const responseMessage = [];

//   const product = await Product.findOne({ _id: productId });

//   const ExistingUsers = await AddToCart.find({ user: userId });

//   if(ExistingUsers.length > 0){

//    const ExtingProductintoUser = ExistingUsers.filter((extingProduct) => extingProduct.productId === productId)


//    if(ExtingProductintoUser.length > 0){
//     ExtingProductintoUser.forEach((extingproductUser)=>{
//         if(extingproductUser.color === color && extingproductUser.size === size){
//             responseMessage.push({
//                 message: "Same user, same product and also same property"
//             }) 
//         } else{
//             responseMessage.push({
//                 message: "Same user, same product but different property"
//             }) 
//         }
//     })
//    } else{
//     responseMessage.push({
//         message: "product not found existing users"
//     })
//    }

//   } else{
//     responseMessage.push({
//         message: "User not found, new cart insert"
//     })
//   }

//   res.json(responseMessage)

// };



exports.createAddToCart = async (req, res, next) => {
    const {productId, color, size} = req.body;

    const user = req.user;
    const userId = user._id;

    const quantity = 1

    const responseMessage = []

    const ExistingUsers = await AddToCart.find({user: userId});
    const product = await Product.findOne({_id: productId})

    if(ExistingUsers.length > 0){
       const ExistingProductIntoUser = ExistingUsers.filter((existingUser)=> existingUser.productId === productId);

       if(ExistingProductIntoUser.length > 0){
        // same user and same product founded
         const ExistingProductwithSameProperty = ExistingProductIntoUser.filter((existinguserIntoProduct)=> existinguserIntoProduct.color === color && existinguserIntoProduct.size === size)

         if(ExistingProductwithSameProperty.length > 0){
            ExistingProductwithSameProperty.forEach(async(singleProduct)=> {
                singleProduct.quantity = singleProduct.quantity + quantity;

                responseMessage.push({message: "Same user, same product and also same product property"})
                await singleProduct.save()
            })
         } else{
            const newCart = {
                productId,
                user: userId,
                oldPrice: product.oldPrice,
                newPrice: product.newPrice,
                color: color,
                size: size,
                quantity: 1
            }
    
            const cart = await AddToCart.create(newCart);
            await cart.save();
    
            responseMessage.push({message: "Same user, same product but not same product property", cart})
         }
       } else{
        // same user and same product not founded
        const newCart = {
            productId,
            user: userId,
            oldPrice: product.oldPrice,
            newPrice: product.newPrice,
            color: color,
            size: size,
            quantity: 1
        }

        const cart = await AddToCart.create(newCart);
        await cart.save();

        responseMessage.push({message: "Same user but not same product", cart})
       }
    
    } else{
        // user not found, so create a cart
        const newCart = {
            productId,
            user: userId,
            oldPrice: product.oldPrice,
            newPrice: product.newPrice,
            color: color,
            size: size,
            quantity: 1
        }

        const cart = await AddToCart.create(newCart);
        await cart.save();

        responseMessage.push({message: "New Cart insert", cart})
    }

    res.json(responseMessage)
}




exports.increment = async (req, res, next) => {
  const productId = req.body.productId;

  const product = await AddToCart.findOne({ productId: productId });

  if (product) {
    product.quantity = product.quantity + 1;
    await product.save();
    res.json({
      success: true,
      message: "product found",
      product,
    });
  } else {
    res.json({
      success: false,
      message: "product not found",
    });
  }
};

exports.decrement = async (req, res, next) => {
  const productId = req.body.productId;

  const product = await AddToCart.findOne({ productId: productId });

  if (product) {
    product.quantity = product.quantity - 1;
    await product.save();
    res.json({
      success: true,
      message: "product found",
      product,
    });
  } else {
    res.json({
      success: false,
      message: "product not found",
    });
  }
};
