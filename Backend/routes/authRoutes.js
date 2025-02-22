const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../Models/user.js')

const router = express.Router();

//User Registration
router.post("/register", async (req, res) => {
    const {name, email, password, role} = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    try{
        const user = User.create({name, email, password : hashPassword, role});
        res.status(200).send("User registered")
    }catch {
        res.status(400).json ({ err : "Email Already Exist" });
    }
})

//User Login
router.post("/login", async (req, res) => {
    const { email, password} = req.body;
    const user = await User.findOne({email});
    if(!user) return res.status(400).json({ error : "Invalid Credentials"});

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) return res.status(400).json({ error : "Invalid credentials"});

    const token = jwt.sign({id: user._id , role : user.role }, process.env.JWT_SECRET , {expiresIn : "2h"})
    res.json({user, token})
})

module.exports = router;