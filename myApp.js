let express = require('express');
let app = express();
const path = require('path');
require('dotenv').config();

//7
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
})
//4
app.use("/public", express.static(__dirname + '/public'));
//2
/*app.get("/", (req, res) => {
    res.send("Hello Express");
})*/

//8
app.get('/now', function(req, res, next) {
  req.time = new Date().toString();  // Hypothetical synchronous operation
  next();
}, function(req, res) {
  res.send({time: req.time});
});
//3
app.get("/public", (req, res) => {
    const indexPath = `${__dirname}/views/index.html`;
    res.sendFile(indexPath);
})

//5
app.get("/json", (req, res) => {
    let response = 'Hello json';
    if(process.env.MESSAGE_STYLE === 'uppercase'){
        res.json({"message": response.toUpperCase()});
    }else{
        res.json({"message": response});
    }
})

/*
//1
app.all("*", (req, res) => {
 //console.log("Hello World");
})*/

 module.exports = app;
