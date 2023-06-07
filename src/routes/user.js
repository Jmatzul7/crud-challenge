const express = require("express");
const router = express.Router();
const userSchema = require("../models/user")

//CREATE USER
router.post("/user", (req, res)=>{
   const user = userSchema(req.body);

   user
   .save()
   .then((data) => res.json(data))
   .catch((error)=>{
    res.json({
        message: error
    })
   });
});

//GET ALL USER
router.get("/user", (req, res)=>{
    userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error)=>{
     res.json({
         message: error
     })
    });
 });

// GET USER BY ID
 router.get("/user/:id", (req, res)=>{
    const { id } = req.params;
    userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error)=>{
     res.json({
         message: error
     })
    });
 });


//UPDATE USER
 router.put("/user/:id", (req, res)=>{
    const { id } = req.params;

    const { name, age, email } = req.body;

    userSchema
    .updateOne({_id: id}, {name, age, email})
    .then((data) => res.json(data))
    .catch((error)=>{
     res.json({
         message: error
     })
    });
 });


 //DELETE USER
 router.delete("/user/:id", (req, res)=>{
    const { id } = req.params;

    userSchema
    .deleteOne({_id: id})
    .then((data) => res.json(data))
    .catch((error)=>{
     res.json({
         message: error
     })
    });
 });


module.exports =  router;