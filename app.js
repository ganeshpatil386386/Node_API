const http = require("http") 
const {getProducts, getProduct, createProduct} = require("./controllers/productControllers")
const server = http.createServer((req,res) => {
    if(req.url === "/api/products" && req.method === "GET"){
          getProducts(req,res)
    }
    else if (req.url.match(/\/api\/products\/([0-9]+)/) && req.method === "GET"){
        const id = req.url.split("/")[3]
        getProduct(req,res,id)
    }
    else if(req.url === "/api/products" && req.method === "POST"){
        createProduct(req,res)
    }
    else{
        res.writeHead(400, {"Content-Type":"application/json"})
        res.end(JSON.stringify({ message: "Route Not found" }))
    }
    
})


server.listen(8080, "localhost", () => {
    console.log("server is running")
})