/* API KEY */
// http://www.omdbapi.com/?i=tt3896198&apikey=f5dfafe6

const express = require('express');

const hostname = "localhost";
const port = 3000;

const app = express();

/* GET */
app.get('/films',(req,res) => {
    res.json({
        req: req.method,
        data : "this is a get"
    })
});

/* PUT */
app.put('/films', (req,res) =>{
    res.json({
        req : req.method,
        data : "this is a put"
    })
});

/* LISTEN */
app.listen(port, hostname, ()=>{
    console.log('App listening on port 3000!')
});