const express=require('express');
const router=express.Router();
const Notes=require('../models/Notes');
const fetchuser = require('../middleware/fetchuser');

//Route-1: Get all the notes using: GET:"/api/auth/get". Login required
router.get('/fetchallnotes',fetchuser,(req,res)=>{
    const notes=await 
    res.send(req.body);
})

module.exports=router