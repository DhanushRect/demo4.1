var express = require('express');

var app = express();


app.get('/' , function(req , res){
    res.send("Changed this to hello")
})


app.listen(3008 , ()=>{
    console.log("Server is connected to 3008");
})