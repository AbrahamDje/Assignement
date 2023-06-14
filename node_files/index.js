const express = require("express");
const app = express();
app.set('views','./views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('Home');
  })

  app.get('/ contact', (req, res) => {
    res.render('contact');
  })

  app.get('/header', (req, res) => {
    res.render('header');
  })
  app.get('/content', (req, res) => {
    res.render('content');
  })  

  app.get('/footer', (req, res) => {
    res.render('footer');
  })
app.listen(3000, function() {
    console.log("Everything work well");
  });

