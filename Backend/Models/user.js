const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : String,
    email : {type : String, unique : true},
    password : String,
    role : { type : String, enum : ["Admin", "Developer", "tester"] , default : "tester"},

}, {timestamps : true});

export default mongoose.model("User", userSchema);