var express = require('express');
const User = require("../models/User");
var router = express.Router();
const isAuth = (req, res, next) => {
    if (!req.session.userId) {
        return res.redirect("/auth/login");
    }
    next();
}


router.get('/', isAuth,async function (req, res, next) {
    const userId = req.session.userId;
    const User = await User.findById(userId);
    if (!User) {
        res.redirect("/auth/login");
    }
    res.render('dashboard', { email: user.email});
});

module.exports = router;
