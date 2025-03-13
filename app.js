const express = require('express');
const res = require('express/lib/response');
const app = express();
const addTwoNumber=(n1,n2) => {
    return n1+n2
}

//here we respond with hello world when a GET response is made
app.get('/addTwoNumber',(req,res)=>{
    const n1=parseInt(req.query.n1);
    const n2=parseInt(req.query.n2);
    const result = addTwoNumber(n1,n2);
    res.json({statuscode:200, data: result})
});
console.log(addTwoNumber((19,12)));
const port=3040;
app.listen(port,()=>{
    console.log("Im listening to the port"+port)
})

console.log(Week-1)

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