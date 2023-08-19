const express = require("express");
const router = express.Router();

router.get("/about-us", (req, res) => {
    res.send("About Us Content");
});

router.get("/contact-us", (req, res) => {
    res.send("Contact Us Content");
});

module.exports = router;