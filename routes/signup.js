// listens to signup endpoint and store to the db
const express = require('express');
const userModel = require(`../models/signup`);

//router
const router = express.Router();

// post method
router.post('/', (req,res) =>{
    // creating a docuemnt to be saved on my app db
    const user = new userModel({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        age : req.body.age,
        email : req.body.email,
    })
    // saves the new users
    user.save()
    .then((result) => result && res.status(200).send(user))
    .catch((err) => {
        err && console.log(err);
    });

});

module.exports = router;