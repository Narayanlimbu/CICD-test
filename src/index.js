const express=require('express');

const app=express();


app.get("/", (req,res)=>{
    res.send("Hello Sample CI/CT Action Test");
})

app.listen(3000, ()=>{
    console.log("Listining on port 3000");
})

