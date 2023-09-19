let express = require('express');
let app = express();

app.all("*", (req, res) => {
 console.log("Hello World");
})



































 module.exports = app;
