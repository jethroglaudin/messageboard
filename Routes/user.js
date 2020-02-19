const express = require('express');
const router = express.Router();
const User = require('../Models/User');


router.get("/", async (req, res) => {
    res.send("Route is working");
});


module.exports = router;
