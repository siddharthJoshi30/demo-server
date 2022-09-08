const express=require('express');
const app=express();
require('../src/db/db.js')
app.use(express.json())
const port=3000;
app.get("/home",async(req,res)=>{
    return res.send("Hello world");

});

app.post("/home1",async(req,res)=>{
    return res.send(req.body)
})

app.listen(port,()=>{
    console.log("Successful");
});
