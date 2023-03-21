const express=require('express');
const router=express.Router();
const Notes=require('../models/Notes');
const fetchuser = require('../middleware/fetchuser');

//Route-1: Get all the notes using: GET:"/api/auth/get". Login required
router.get('/fetchallnotes',fetchuser,async (req,res)=>{
    const notes=await Notes.find({user: req.user.id});
    res.json(notes);
})

/Route-1: Get all the notes using: GET:"/api/auth/get". Login required
router.get('/fetchallnotes',fetchuser,async (req,res)=>{
    const notes=await Notes.find({user: req.user.id});
    res.json(notes);
})

module.exports=router