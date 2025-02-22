const express = require('express');
const BUG = require('../Models/bug');
const authenticate = require('../Middlewares/authMiddlewares');


const router = express.Router();

//create Bug
router.post('/', authenticate, async (req, res) => {
    const {title, description} = req.body;
    const bug = await BUG.create({title, description, createdBy: req.user.id})
    res.status(201).json(bug);
})

// Get all bug
router.get('/', authenticate, async  (req, res) => {
    
    const bugs = await BUG.find().populate("createdBy", "name");
    res.json(bugs);
})

//Update Bug Status
router.put('/', authenticate, async(req, res) => {
   
    const bug = await BUG.findByIdAndUpdate(req.params.id, req.body, {new : true})
    res.json(bug);
})

//Delete Bug
router.delete('/', authenticate, async (req, res)=> {
    const bugs = await BUG.findByIdAndDelete(req.params.id);
    res.json({ message : "Bug Deleted"});
})

module.exports = router;