const express=require('express');
const cors=require('cors')
const userRouter=require('./routers/user')
require('./db/db')


const app=express();
const port=3000;

app.use(cors())
app.use(express.json())
app.use(userRouter)



app.get("/home",async(req,res)=>{
    return res.send("Hello world");

});

app.post("/home1",async(req,res)=>{
    return res.send(req.body)
})

app.listen(port,()=>{
    console.log("Successful");
});
