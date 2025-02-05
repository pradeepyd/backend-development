const express = require("express");
const app = express();

let port = 8080;
app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
}); 


app.get("/",(req,res)=>{
    res.send("you contacted root path ,hello world.coding is love");
});

app.get("/:username/:id",(req,res)=>{
    console.log(req.params);
   let {username,id} = req.params;
   let htmlStr = `<h1>welcome to the page of @${username}.</h1>`;
    res.send(htmlStr);
});

app.get("/apple",(req,res)=>{
    res.send("you contacted apple path");
});

app.get("/orange",(req,res)=>{
    res.send("you contacted orange path");
});

// app.get("*",(req,res)=>{
//     res.send("this path doesnot exist");
// });

app.get("/search",(req,res)=>{
    let {q} = req.query;
    if(!q){
        res.send("<h1>nothing searched</h1>");
    }
    res.send(`<h1>search results for query: ${q}</h1>`);
});


// app.use((req,res)=>{
//     console.log("request received");
//     let code = "<h1>Fruits</h1><ul><li>apple</li><li>orange</li></ul>";
//     res.send(code);
// });