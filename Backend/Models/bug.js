// Model what bugs contain?
const mongoose = require('mongoose');

const bugSchema = mongoose.Schema({
    title : String,
    description : String,
    Status : {type : String, enum : ["Open", "In progress", "Resolved"], default : "Open"},
    createdBy : { type : mongoose.Schema.Types.ObjectId, ref: "User"},
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
}, {timestamps : true});

export default mongoose.model("Bug", bugSchema);