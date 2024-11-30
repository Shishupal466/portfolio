const express = require('express');
const { copyFile } = require('fs');
const path = require('path')
const app = express();

let PORT = 5500;

app.use(express.static(__dirname));


app.get("/",(req,res)=>{
    // res.send("server run")
    res.sendFile(path.join(__dirname+"/index.html"))
})

app.get("/9798679120",(req,res)=>{
    res.send(copyFile);
});

app.listen(PORT,()=>{
    console.log(`app listening on port ${PORT}`);
    console.log('hello')
});