let express = require('express');
let app = express();
const path = require('path');
require('dotenv').config();

//4
app.use("/public", express.static(__dirname + '/public'));
//2
/*app.get("/", (req, res) => {
    res.send("Hello Express");
})*/

//3
app.get("/public", (req, res) => {
    const indexPath = `${__dirname}/views/index.html`;
    res.sendFile(indexPath);
})

//5
app.get("/json", (req, res) => {
    if(process.env.MESSAGE_STYLE === 'uppercase'){
        res.json({"message": "Hello json".toUpperCase()});
    }else{
        res.json({"message": "Hello json"});
    }
})

/*
//1
app.all("*", (req, res) => {
 //console.log("Hello World");
})*/

 module.exports = app;
