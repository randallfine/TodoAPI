const express = require("express"),
      app = express();

app.get("/", function(req, res){
    res.send("HELLO FROM EXPRESS!!");
});

app.listen(process.env.PORT, function(){
    console.log("app is go at port: " + process.env.PORT);
});