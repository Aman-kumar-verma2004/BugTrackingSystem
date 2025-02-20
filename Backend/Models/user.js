const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : String,
    email : {type : String, unique : true},
    password : String,
    role : { type : String, enum : ["Admin", "Developer", "tester"] , default : "tester"},

}, {timestamps : true});

//{timestamps: true} : - means it is a option that we can pass whenever we creating a schema and it automatically add two field i) createdAt : stores date and time whenever the document is created ii) Stores date and time whenever the document is lastly updated; 

export default mongoose.model("User", userSchema);
 // Defining the model;