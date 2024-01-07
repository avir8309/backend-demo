const express=require('express');
const app=express();


app.use(express.json());
app.listen(3000,()=>{
    console.log("server started");
})
const dbConnect=require("./Config/db.js");
dbConnect();