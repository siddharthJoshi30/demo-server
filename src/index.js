const express=require('express');
const app=express();
const port=3000;
app.get("/home",async(req,res)=>{
    return res.send("Hello world");

})

app.listen(port,()=>{
    console.log("Successful");
});
