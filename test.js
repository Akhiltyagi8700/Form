const express = require("express");
const test = express();
const path=require("path");


test.set("view engine","ejs");
test.set("views",path.join(__dirname,"views"));
test.use(express.urlencoded({extended:true}));

test.get("/", (req,res) => {
    res.send("Working well!");
});

test.get("/register",(req,res)=>{
    res.render("register.ejs");
});

test.get("/login",(req,res)=>{
    res.render("login.ejs");
});

test.get("/forgotpass",(req,res)=>{
    res.render("forgotpass.ejs");
});

const port = 8080;
test.listen(port,()=>{
    console.log("listening on port 8080");
});