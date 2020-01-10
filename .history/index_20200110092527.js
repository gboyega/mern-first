const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const app = express();

app.get('/api/', (req, res) => {
  res.json({hello: 'world'});
});

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindANdModify: false
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log("MongoDB data")
})



app.listen(process.env.PORT || 4000, () => console.log('APP listening on 4000'));