const db = require("../models")

const Review = db.reviews

//Create Review

const addReview = async (req,res)=>{
    try {
        const info = {
            rating: req.body.rating,
            description: req.body.description,
        }
        try {
            const review = await Review.create(info);
            console.log(info);
            res.status(200).send(review)
            console.log("OK created one Product: ", review);
        } catch (error) {
            console.log("Error occured in rating");
            return res.status(500).send(error);
        }
    }
    catch (error) {
        return res.status(500).send("Bad Request");
    }
}
//Update Review..
const updateReview = async (req,res)=>{
    try{
        let id = req.params.id

        const review = await Review.update(req.body,{ where: { id:id }});
        res.status(200).send(review);
        console.log("OK Product info updated!! ");
    }
    catch (error){
        console.log("Error occured while updating the product", error);
        return res.status(500).send(error);
    }

}
//Get Review of 1 product by id
const getreviewOneProduct = async (req,res)=>{
    try{
        let id = req.params.id
        const review = await Review.findOne({where:{id:id}});
        res.status(200).send(review);
        console.log("OK get One Product: ",review);
    }
    catch (error){
        console.log("Error occured in rating.");
        return res.status(500).send(error);
    }
}
//get all products reviews
const getAllReviews = async (req,res)=>{
    try{
        const reviews = await Review.findAll({});
        res.status(200).send(reviews);
        console.log("OK getAll Products: ",reviews);
    }
    catch (error){
        console.log("Error occured in rating");
        return res.status(500).send(error);
    }

}
module.exports = {
   addReview,getAllReviews,getreviewOneProduct,updateReview
}