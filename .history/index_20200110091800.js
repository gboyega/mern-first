const express = require("express");
const mongoose = require("mongoose");
const 
const app = express();


app.get('/api/', (req, res) => {
  res.json({hello: 'world'});
});



app.listen(process.env.PORT || 4000, () => console.log('APP listening on 4000'));