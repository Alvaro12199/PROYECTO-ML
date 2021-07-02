const express = require ("express");
const app = express ();
const path = require("path")
// server
app.listen (3000, () => console.log("Server on http://localhost:3000"));

// public access
app.use(express.static(path.resolve(__dirname, "../public")));

// website routes
app.get("/", (req, res) => res.sendFile(path.resolve(__dirname, "./views", "index.html")));



app.get('/login',(req,res) => res.sendFile(path.resolve(__dirname,'../views','login.html')))
app.get('/register',(req,res) => res.sendFile(path.resolve(__dirname,'../views','register.html')))

app.get('/index',(req,res) => res.sendFile(path.resolve(__dirname,'../views','index.html')))