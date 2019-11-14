const express = require("express");
const hbs = require("hbs");
const ejs = require("ejs");

const app = express();

// app.set("view engine", "hbs");
app.set("view engine", "ejs");
app.set("views", __dirname+"/template/views");

// hbs.registerPartials(__dirname+"/template/partials");

let username = "Foo";
let age = 32;

app.get("/", (req, res) => {
    res.render("index", { username, age });
})

app.get("/about", (req, res) => {
    res.render("about");
})

app.get("/home", (req, res) => {
    res.render("home", {username, age});
})

app.listen(9090, () => {
    console.log("Server listening on Port 9090...");
})


// npm install express hbs --save