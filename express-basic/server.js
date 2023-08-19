const express = require("express");
const app = express();
app.use(logger);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    //res.send("Hello World!!");
    res.render("home");
});

const pagesRouter = require("./routes/pages");
app.use("/pages", pagesRouter);

const userRouter = require("./routes/users");
app.use("/users", userRouter);

function logger(req, res, next) {
    console.log(req.originalUrl);
    next();
}

app.listen(3000);