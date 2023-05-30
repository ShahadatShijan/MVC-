const path = require("path");
const users = require("../models/user.model")

exports.getUser = (req,res)=>{
    res.sendFile(path.join(__dirname+"./../views/index.html"));
    
}
exports.postUser = (req,res)=>{
    const name = req.body.name;
    const age = req.body.age;
    const user = {
        name,
        age
    }
    users.push(user);
    res.status(201).send(users);
}