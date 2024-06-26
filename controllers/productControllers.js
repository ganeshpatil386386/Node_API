const Product = require("../models/productModel")

// Get All Product

async function getProducts(req,res){
    try{
        const products = await Product.findAll()

        res.writeHead(200, {"Content-Type":"application/json"})
        res.end(JSON.stringify(products))
    }catch(error){
        console.log(error)
    }
}

// Get single Product

async function getProduct(req,res, id){
    try{
        const product = await Product.findById(id)

        if(!product){
            res.writeHead(400, {"Content-Type":"application/json"})
            res.end(JSON.stringify( { message: "Product 404" }))
        }else{
            res.writeHead(400, {"Content-Type":"application/json"})
            res.end(JSON.stringify(product))
        }

        
    }catch(error){
        console.log(error)
    }
}


// Create Products => POST req

async function createProduct(req,res){
    try{
        const product = {
            title: "Laptop",
            description: "Mac laptop",
            price: 100
        }

        const newProduct = await Product.create(product)
        res.writeHead(201, {"Content-Type":"application/json"})
            return res.end(JSON.stringify(newProduct))
        
    }catch(error){
        console.log(error)
    }
}

module.exports = {
    getProducts,
    getProduct,
    createProduct

}

