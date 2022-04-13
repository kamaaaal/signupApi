// test page and doesnt do anything
const express = require('express');
const app = express();

//route 
const router = express.Router();

router.get('/login',(req,res) => {
    console.log(`request on login`);
    res.send('this is a login page');
})

module.exports = router;