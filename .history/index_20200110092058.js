const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const app = express();

app.get('/api/', (req, res) => {
  res.json({hello: 'world'});
});

mongoose.connect(process.env.DB_URL, {
    useNewUr
})



app.listen(process.env.PORT || 4000, () => console.log('APP listening on 4000'));