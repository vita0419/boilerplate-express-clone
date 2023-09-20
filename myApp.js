let express = require('express');
let app = express();

//4
const staticPath = __dirname + "/public";
app.use(staticPath, express.static());

//2
/*app.get("/", (req, res) => {
    res.send("Hello Express");
})*/

//3
app.get("/", (req, res) => {
    const indexPath = __dirname + "/views/index.html";
    res.sendFile(indexPath);
})

//5
app.get("/json", (req, res) => {
    res.json({"message": "Hello json"});
})

//1
app.all("*", (req, res) => {
 //console.log("Hello World");
})



































 module.exports = app;
