// Model what bugs contain?
const mongoose = require('mongoose');

const bugSchema = new mongoose.Schema({
    title : String,
    description : String,
    Status : {type : String, enum : ["Open", "In progress", "Resolved"], default : "Open"},
    createdBy : { type : mongoose.Schema.Types.ObjectId, ref: "User"},
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
}, {timestamps : true});

module.exports = mongoose.model("Bug", bugSchema);

// mongoose.Schema.Types.ObjectId :- This syntax is used to make a relationship with diffrent collection
//ref :"User" - means that the ObjectId is from User Collection.