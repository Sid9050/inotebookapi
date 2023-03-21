const express=require('express');
const router=express.Router();
const User=require('../models/User');

//Route-1: Get all the notes using: GET:"/api/auth"
router.get('/fetchallnotes',(req,res)=>{
    console.log(req.body);
    res.send(req.body);
})

module.exports=router