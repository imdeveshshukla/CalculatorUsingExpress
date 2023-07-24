var express=require('express');
var app=express();
// var bPar=require('body-parser');
// const { urlencoded } = require('body-parser');

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});
// app.use(bPar,urlencoded({extended:true}));
app.use(express.urlencoded({extended:true}));
// app.use(express.json());



app.post("/",function(req,res){
    var n1=Number(req.body.num1);
    var n2=Number(req.body.num2);
    var n3=n1+n2;
    console.log(req.body);
    res.send("YOur Calculation="+n3);
});

app.get("/bmi",function(req,res){
    res.sendFile(__dirname+"/bmi.html");
});
app.post("/bmi",function(req,res){
    console.log(req.body);
    var h=parseFloat(req.body.h1);
    var w=parseFloat(req.body.w1);
    var c=w/(h*h);
    res.send("Your BMI is = "+c);
    // res.send("Thanks");
});


app.listen(8080,function(){
    console.log("Server started at PORT 8080");
});