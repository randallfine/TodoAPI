const express = require("express"),
      app = express(),
      port = process.env.PORT;

app.get("/", function(req, res){
    res.send("HELLO FROM EXPRESS!!");
});

app.listen(port, function(){
    console.log("app is go at port: " + process.env.PORT);
});