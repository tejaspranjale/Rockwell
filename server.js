var express=require('express');
var app=express();

app.get("/",function(req,res){
    res.sendFile("./public/index.html",{root:__dirname})
});
app.post("/about",function(req,res){
    res.sendFile("./public/about.html",{root:__dirname})
});
app.post("/thankyou",function(req,res){
    res.sendFile("./public/thankyou.html",{root:__dirname})
});

app.listen(9000);
console.log("Server Started at port 9000");