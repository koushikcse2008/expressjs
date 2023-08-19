const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    //res.send("List Page");
    res.render("users/list");
});

router.get("/create", (req, res) => {
    res.render("users/create");
});

// router.get("/:id/edit", (req, res) => {
//     res.send(`edit id Page: ${req.params.id}`);
// });

router.get("/update", (req, res) => {
    res.send("Update Page");
});

router.get("/delete", (req, res) => {
    res.send("Delete Page");
});

router
.route("/:id")
.get((req, res) => {
    res.send("Get the list");
})
.put((req, res) => {
    res.send("Update the list");
})
.delete((req, res) => {
    res.send("Delete the list");
});

// router.param("id", (req, res, next, id) => {
//     res.send(id);
//     next();
// });

module.exports = router;