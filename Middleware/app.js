const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

// app.use((req,res ,next) => {
//     console.log("hi,i am middleware");
//     return next();
// });


//logger 
// app.use((req,res,next) => {
//     req.time = Date.now();
//     console.log(req.path , req.hostname ,req.method, req.time);
//     next();
// })

const checkToken = (req,res,next) => {
    let { token } = req.query;
    if (token === "giveaccess") {
        next();
    }
    // throw new Error ("ACCESS DENIED!");
    throw new ExpressError(401,"ACCESS DENIED");
};

app.get("/api",checkToken, (req,res) => {
    res.send("data");
})

app.get("/", (req, res) => {
    res.send("hi,i am root");
});

app.get("/random", (req, res) => {
    res.send("hi,i am random one");
}); 

app.get("/err", (req,res) => {
    abcd = abcd;
})

app.get("/admin",(req,res) => {
    throw new ExpressError(403,"Access to admin is Forbidenn"); 
})

app.use((err, req , res, next) => {
    let {status = 500, message = "Some Error Occured" } = err;
    res.status(status).send(message);
    console.log("-----ERROR-----");
    // next(err);
    // res.send(err);
})

// app.use((req,res) => {
//     res.status(404).send("page not found!");
// });

app.listen(8088,()=>{
    console.log("app is listening at port 8080");
});