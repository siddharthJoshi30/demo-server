require('./db/db')
const express=require('express');
const cors=require('cors')
const userRouter=require('./routers/user')
const emergency_contact_router=require('./routers/emergency_contact')



const app=express();
const port=3000;

app.use(cors())
app.use(express.json())
app.use(userRouter)
app.use(emergency_contact_router)



app.get("/home",async(req,res)=>{
    return res.send("Hello world");

});

app.post("/home1",async(req,res)=>{
    return res.send(req.body)
})

app.listen(port,()=>{
    console.log("Successful");
});
