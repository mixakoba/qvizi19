var express = require('express');
const User = require("../models/User");
var router = express.Router();


router.get('/',async function (req, res, next) {
    const { password,newPassword,confirmPassword } = req.body;
    if (password !== password) {
        res.status(400).send('incorrect password,please try again.');
    }
    if (newPassword !== confirmPassword) {
        res.status(400).send('Passwords do not match');
    }
    res.render('profile', { email: user.email});
});

module.exports = router;
