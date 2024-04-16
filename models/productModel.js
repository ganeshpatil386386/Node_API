const products = require("../data/products.json")
const {v4: uuidv4} = require("uuid")
const {writeDataToFile} = require("../utils")

function findAll() {
    return new Promise((res,rej) => {
        res(products)
    })
}

function findById(id) {
    return new Promise((res,rej) => {
        const product = products.find((p) => p.id === id)
        res(product)
    })
}

function create(product) {
    return new Promise((res,rej) => {
        const newProduct = {id: uuidv4(), ...product}
        products.push(newProduct)
        writeDataToFile("./data/products.json", products)
        res(newProduct)
    })
}
module.exports = {
    findAll,
    findById,
    create
}