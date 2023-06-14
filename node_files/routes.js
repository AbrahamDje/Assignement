const express = require("express");
const app = express();


app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  app.get('/message', (req, res) => {
    res.sendFile(__dirname + "/home.html");
  });

app.listen(3000, function() {
    console.log("Everything work well");
  });
