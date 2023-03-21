const express=require('express');
const router=express.Router();
const Notes=require('../models/Notes');

//Route-1: Get all the notes using: GET:"/api/auth/get". Login required
router.get('/fetchallnotes',(req,res)=>{
    console.log(req.body);
    res.send(req.body);
})

module.exports=router