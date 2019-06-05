const express = require("express");

const app = express();

//creating the route '/'
app.get('/',(req, res)=>{
    res.end("<h1>olá</h1>");
});

app.get('/hello',(req, res)=>{
    res.json({hello:"world"});
});

app.listen(3000, '127.0.0.1',()=>{
    console.log("runnig server");
})