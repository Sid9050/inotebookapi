const express=require('express');
const router=express.Router();
const Note=require('../models/Note');
const fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require("express-validator");


//Route-1: Get all the notes using: GET:"/api/auth/fetchallnotes". Login required
router.get('/fetchallnotes',fetchuser,async (req,res)=>{
    try{
        const notes=await Note.find({user: req.user.id});
        res.json(notes);
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server error");
        }
    
})

//Route-2: Add a new note using: POST:"/api/auth/addnote". Login required
router.post('/addnote',fetchuser,[
    body('title','Enter a valid title').isLength({min:3}),
    body('description','Enter a valid description').isLength({min:5}),
],async (req,res)=>{
    try{
        const {title,description,tag}=req.body;
        // If there are errors, return bad request and errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }
        const note=await new Note({
            title,description,tag, user:req.user.id
        })
        const savedNote=await note.save()
        res.json(savedNote);
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server error");
      }
    
})

//Route-2: Update a note using: PUT:"/api/auth/updatenote". Login required
router.put('/updatenote/:id',fetchuser,async (req,res)=>{
    const {title,description,tag}=req.body;
    //Create a new Note object
    const newNote={};
    if(title){newNote.title=title};
    if(description){newNote.description=description};
    if(tag){newNote.tag=tag};

    //Find the note to be updated and update it
    const note=Note.findById(req.params.id);
    if(!note){
        return res.status(404).send("Not Found");
    }
    if(note.user.toString()!==req.user.id){
        return res.status(401).send("Not Allowed")
    }
})

module.exports=router