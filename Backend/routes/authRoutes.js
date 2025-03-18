const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../Models/user.js')

const router = express.Router();

//User Registration
router.post("/register", async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already registered!" });
        }

        
        const hashedPassword = await bcrypt.hash(password, 10);

       
        const newUser = new User({ name, email, password: hashedPassword, role });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error!" });
    }
});

//User Login
router.post("/login", async (req, res) => {
    const { email, password} = req.body;
    const user = await User.findOne({email});
    if(!user) return res.status(400).json({ error : "Invalid Credentials"});

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) return res.status(400).json({ error : "Invalid credentials"});

    const token = jwt.sign({id: user._id , role : user.role }, process.env.JWT_SECRET , {expiresIn : "1h"})
    res.json({user, token})
})

module.exports = router;