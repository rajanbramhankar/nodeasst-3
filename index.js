const express = require('express')
const app = express();

//Middle
const middleware1=(req, res, next)=>{
    console.log("Middleware-1");
    next()
}
//    Middleware
//  Middleware are like any general functions which takes in three parameters as request, response and next function.
//  These middleware are used to execute some function before the response is send back to the client. 
//  It mostly gets used for the authentication, that before we send the response, we can authenticate if the API request is called from the client with proper user credentials or not.
//  These middleware can be applied on the whole application level as well as on one particular API route.
//  next() function is very important, after the end of each middleware we should execute next function so that the program execution can move either to next middleware or to main route, if this function is not added then execution will not move forward.

//app.use(middleware1);//with this syntax our middle ware is apply on hole page 

app.get("/",middleware1,(req,res)=>{
    res.send(" Main page with Middleware1 ")
})

const middleware2=(req, res, next)=>{
    console.log("Middleware-2");
    next()
}

//middleware for application 

app.use(middleware2);

//create app routs



app.get("/Page1",middleware1,(req,res)=>{
    res.send("<h1>page with middleware1 and middleware2</h1>")
})

app.get("/Page2",(req,res)=>{
    res.send(" <h1>Page2 with middleware2</h1> ")
})

app.get("/Page3",(req,res)=>{
    res.send("<h1>page3 with middleware 2</h1>")
})

app.listen(4500);