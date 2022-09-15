// import express module
const express = require("express");
const cors = require('cors');

// create an express application by calling express() function
/**
     app variable (express application) has methods for handling request and configuring
     how the application behave we can create multiple apps this way, each with
     their own request & response
 */
const app = express();

var corOptions = {
    origin : "https://localhost:8080"
}

//middleware
app.use(cors(corOptions))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//routers

// const router = require("../sequelize_demo2/routes/productRouter")
const router = require("../sequelize_demo2-develop/routes/productRouter");
app.use("/",router)

//testing api
/**
   app.get() is function, called routes definition.
   This function takes two parameters , 1st is the route or path which
   is the relative path from the root of the server & 2nd is callback function,
   has a two arguments req * res.
   req represents the request sent from the browser to the server.
   res represents the response that the server sends back.
 */
app.get('/',(req,res)=>{
    res.json({message:"Hello from API"})
})
//port
const PORT = process.env.PORT || 8000
console.log(process.env.PORT);

//server
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})