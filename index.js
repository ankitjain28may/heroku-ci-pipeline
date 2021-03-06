const express = require('express');

const app = express();
const port = process.env.PORT || 9000;

app.get('/', (req, res) => {
  res.send("Congratulations, Hello world");
})

app.get('/ci', (req, res) => {
  res.send("Hey, This is me CI!");
})

app.get('/pr', (req, res) => {
  res.send("Hey, This is PR Review Apps feature!");
})

app.listen(port);
console.log("Server started at port " + port);
