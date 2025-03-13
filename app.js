const express = require('express');
const res = require('express/lib/response');
const path = require('path'); // Add this line to require the 'path' module
const app = express();

//adding two numbers here
const addTwoNumber=(n1,n2) => {
    return n1+n2
}
// This is for index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });

//here we respond with sum of two numbers here when a GET response is made
app.get('/addTwoNumber',(req,res)=>{
    const n1=parseInt(req.query.n1);
    const n2=parseInt(req.query.n2);
    const result = addTwoNumber(n1,n2);
    res.json({statuscode:200, data: result})
});

console.log(addTwoNumber((19,12)));
const port=3080;
app.listen(port,()=>{
    console.log("Im listening to the port"+port)
})

console.log("Week1");

console.log(addTwoNumber(19,12));

var async = function()
{
    setTimeout(function() { log("I am coming out later although I have been called before the next one")},2000)
}

var adder=function(first,second){
    var sum=first+second
    return sum
}

var log= function(msg){
    console.log("[Log] : ",msg)
}

log('Hello world')
log("Welcome to SIT323")
log("the sum is"+adder(5,6))
async();
log("This is going to come out before the previous one")