const  productController = require("../controllers/productController")
const reviewController = require("../controllers/reviewController")

const router = require("express").Router()

router
    //Product Routes
    .post("/addProduct",productController.addProduct)
    .get("/allProducts",productController.getAllProducts)
    .get("/allProduct/:id",productController.getOneProduct)
    .put("/updateProduct/:id",productController.updateProduct)
    .delete("/deleteProduct/:id",productController.deleteProduct)
    //Review routes
    .post("/addReview",reviewController.addReview)
    .post("/updateReview/:id",reviewController.updateReview)
    .get("/getAllReviews",reviewController.getAllReviews)
    .get("/AllReviews/:id",reviewController.getreviewOneProduct)


module.exports = router;