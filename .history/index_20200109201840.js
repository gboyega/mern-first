const express = require ("express");



const app = express();
app.get('/api/', (req, res) => {
    res.json({hello: 'world'});
});

app.listen(process.env.PORT ||)