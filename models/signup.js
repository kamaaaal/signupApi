const mg = require('mongoose');

// schema 
const user = mg.Schema({
    firstName : String,
    lastName : String,
    age : Number,
    email : String,
})

// creates a model and export(will be used on routes)
const userModel = mg.model('user',user,'Users');
module.exports = userModel